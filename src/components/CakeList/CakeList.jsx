import "./cake-list.css";
import { cakes } from "./cakes";
import Cake from "./Cake";
export default function CakeList() {
  return (
    <div className="cakes-list">
       {cakes.map((cake, index) => (
        <Cake
          key={index}
          img={cake.img}
          name={cake.name}
          desc={cake.desc}
        />
      ))}
    
    </div>
  );
}
