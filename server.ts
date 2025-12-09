import { Database } from "bun:sqlite";
import path from "node:path";
import { mkdir, stat } from "node:fs/promises";

const db = new Database("db.sqlite");

db.query(
  "create table if not exists cakes (id integer not null primary key autoincrement, name text not null, description text, price num, image_path varchar(200));",
).run();
const getAllCakesQuery = db.prepare("select * from cakes");
const createCakeQuery = db.prepare(
  "insert into cakes (name, description, price, image_path) values ($name, $description, $price, $image_path)",
);
const getCakeQuery = db.query("select * from cakes where id = ?");
const deleteCakeQuery = db.query("delete from cakes where id = ?");

const serverStaticFolderPath = path.join(__dirname, "server-static");

const checkStaticFolder = () => {
  stat(serverStaticFolderPath).catch((error) => {
    if (error.code === "ENOENT") {
      mkdir(serverStaticFolderPath, { recursive: true }).then(() =>
        console.log("Static folder created"),
      );
    }
  });
};
checkStaticFolder();

interface Cake {
  id: number;
  name: string;
  description: string | null;
  price: number;
  image_path: string | null;
}

const cakeResolver = (cake: Cake, req: Request) => {
  if (cake.image_path) {
    const reqUrl = new URL(req.url);
    const fullImagePath = path.join(reqUrl.origin, "static", cake.image_path);
    cake.image_path = fullImagePath;
  }
  return cake;
};

const server = Bun.serve({
  port: 3000,
  routes: {
    "/api/cakes": {
      GET: (req) =>
        Response.json(
          getAllCakesQuery.all().map((cake) => cakeResolver(cake, req)),
        ),
      POST: (req) => {
        return req
          .formData()
          .then((body: FormData) => {
            if (!body.has("name") || typeof body.get("name") !== "string") {
              return new Response("Name is a required field", { status: 400 });
            }
            if (!body.has("price") || Number.isNaN(body.get("price"))) {
              return new Response("Price is a required field", { status: 400 });
            }
            if (body.has("image")) {
              const image = body.get("image") as File;
              const image_path = path.join(crypto.randomUUID(), image.name);
              checkStaticFolder();
              Bun.write(path.join(serverStaticFolderPath, image_path), image);
              body.set("image_path", image_path);
              body.delete("image");
            }
            createCakeQuery.run(
              Object.fromEntries(
                [...body.entries()].map(([key, value]) => ["$" + key, value]),
              ),
            );
            return new Response("Created");
          })
          .catch((e) => {
            console.log(e);
            return new Response(
              "Invalid body format. Expected object with fields: name, description and price",
              { status: 400 },
            );
          });
      },
    },
    "/api/cakes/:id": {
      GET: (req) => {
        const cake = getCakeQuery.get(req.params.id);
        if (!cake) {
          return new Response("Not found", { status: 404 });
        }
        return Response.json(cakeResolver(cake, req));
      },
      DELETE: (req) => {
        const cakeId = req.params.id;
        const cake = getCakeQuery.get(cakeId);
        if (!cake) {
          return new Response("Not found", { status: 404 });
        }
        deleteCakeQuery.run(cakeId);
        return new Response("Deleted");
      },
    },
    "/static/*": async (req: Request) => {
      const reqUrl = new URL(req.url);
      const filePath = reqUrl.pathname.slice("/static".length);
      const bunFile = Bun.file(path.join(serverStaticFolderPath, filePath));
      const fileExists = await bunFile.exists();
      if (!fileExists) {
        return new Response("Not found", { status: 404 });
      }
      return new Response(bunFile);
    },
  },
});

console.log(`Server running at ${server.url}`);
