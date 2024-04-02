import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";

const DinosaurDetail = () => {
  const { dinosaurName } = useParams();
  const { data } = useFetch("https://chinguapi.onrender.com/dinosaurs");

  const [dinoData, setDinoData] = useState(null);

  useEffect(() => {
    if (data) {
      const dino = data.find((dinosaur) => dinosaur.name === dinosaurName);
      setDinoData(dino);
    }
  }, [data, dinosaurName]);

  return (
    <div className="flex flex-col p-4 md:p-6 lg:p-8 xl:p-10 gap-8 md:gap-12 lg:gap-16 my-6 md:px-10 lg:px-16 xl:px-32 mb-20">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-32 xl:gap-x-44">
        <div className="min-w-[300px] max-w-[500px]">
          <img
            src={dinoData?.imageSrc}
            alt={dinoData?.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col text-[.95rem] max-w-[700px] mt-6 gap-3">
          <h2 className="font-bold text-2xl mb-2">{dinoData?.name}</h2>
          <p>
            <span className="font-semibold">Type:</span>{" "}
            {dinoData?.typeOfDinosaur}
          </p>
          <p>
            <span className="font-semibold">Species:</span>{" "}
            {dinoData?.typeSpecies}
          </p>
          <p>
            <span className="font-semibold">Length:</span> {dinoData?.length}m
          </p>
          <p>
            <span className="font-semibold">Diet:</span> {dinoData?.diet}
          </p>
          <p>
            <span className="font-semibold">When it lived:</span>{" "}
            {dinoData?.whenLived}
          </p>
          <p>
            <span className="font-semibold">Found in:</span> {dinoData?.foundIn}
          </p>
          <p>
            <span className="font-semibold">Named by:</span> {dinoData?.namedBy}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <h4 className="font-bold text-lg mb-2">Description</h4>
          <p className="text-[.95rem] leading-6">{dinoData?.description}</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Taxonomy Details</h4>
          <p className="text-[.95rem] leading-6">{dinoData?.taxonomy}</p>
        </div>
      </div>
    </div>
  );
};

export default DinosaurDetail;
