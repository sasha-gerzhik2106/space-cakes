import "./cake-list.css";
import { shortCakes, allCakes } from "./cakes";
import Cake from "./Cake";

export default function CakeList({variant = 'short'}) {
  let cakes = [];
  if (variant === 'short') {
    cakes = shortCakes
  }else if (variant === 'all') {
    cakes = allCakes
  }
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
