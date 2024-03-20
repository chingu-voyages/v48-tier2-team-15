import * as d3 from "d3";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";

export const PieChart = () => {
  const { data, error, loading } = useFetch(
    "https://chinguapi.onrender.com/dinosaurs"
  );

  const [dinoTypeKeys, setDinoTypeKeys] = useState(new Set());
  const [dinoDietKeys, setDinoDietKeys] = useState(new Set());

  console.log(`Dinosaur Types: ${Array.from(dinoTypeKeys)}`);
  console.log(`Dinosaur Diets: ${Array.from(dinoDietKeys)}`);

  useEffect(() => {
    if (!loading && data) {
      const typeKeys = new Set(data.map((dino) => dino.typeOfDinosaur));
      setDinoTypeKeys(typeKeys);

      const dietKeys = new Set(data.map((dino) => dino.diet));
      setDinoDietKeys(dietKeys);
    }
  }, [data, loading]);

  return <div>Pie Chart</div>;
};
