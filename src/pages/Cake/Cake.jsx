import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CakePage() {
  const { id } = useParams();
  const [cake, setCake] = useState(null);

  useEffect(() => {
    async function loadCake() {
      const res = await fetch(`http://134.209.226.244:3000/api/cakes/${id}`);
      const data = await res.json();
      setCake(data);
    }

    loadCake();
  }, [id]);

  if (!cake) return <div>Loading...</div>;

  return (
    <div>
      <h1>{cake.name}</h1>
      <p>{cake.description}</p>
      <img src={cake.image} alt={cake.name} />
    </div>
  );
}
