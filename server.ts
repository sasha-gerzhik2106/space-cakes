import { Database } from "bun:sqlite";

const db = new Database("db.sqlite");

db.query(
  "create table if not exists cakes (id integer not null primary key autoincrement, name text not null, description text, price num);",
).run();
const getAllCakesQuery = db.prepare("select * from cakes");
const createCakeQuery = db.prepare(
  "insert into cakes (name, description, price) values ($name, $description, $price)",
);
const getCakeQuery = db.query("select * from cakes where id = ?");
const deleteCakeQuery = db.query("delete from cakes where id = ?");

Bun.serve({
  port: 3000,
  routes: {
    "/api/cakes": {
      GET: () => Response.json(getAllCakesQuery.all()),
      POST: (req) => {
        return req.body
          .json()
          .then((body) => {
            if (!body.name || typeof body.name !== "string") {
              return new Response("Name is a required field", { status: 400 });
            }
            if (typeof body.price !== "number" || Number.isNaN(body.price)) {
              return new Response("Price is a required field", { status: 400 });
            }
            createCakeQuery.run(
              Object.fromEntries(
                Object.entries(body).map(([key, value]) => ["$" + key, value]),
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
        return Response.json(cake);
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
  },
});
