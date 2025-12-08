import "./cake-list.css";
import { shortCakes, allCakes } from "./cakes";
import Cake from "./Cake";
import { useEffect, useState } from "react";
import Macaroon from './Photo-cake/macaroon.jpg';
export default function CakeList({variant = 'short'}) {
  const [cakes, setCakes] = useState([]);
  useEffect(() => {
    fetch('http://134.209.226.244:3000/api/cakes')
    .then((response)=>{
      return(
        response.json()
      )
    })
    .then((data)=>{
      setCakes(data)
    })
  },[])
  // if (variant === 'short') {
  //   cakes = shortCakes
  // }else if (variant === 'all') {
  //   cakes = allCakes
  // }
  return (
    <div className="cakes-list">
       {cakes.map((cake, index) => (
        <Cake
          key={index}
          img={Macaroon}
          name={cake.name}
          desc={cake.description}
        />
      ))}
    
    </div>
  );
}
