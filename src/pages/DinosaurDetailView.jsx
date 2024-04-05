import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import DinoMap from "../components/DinoMap";
import { useGeocode } from "../hooks/useGeocode";
import { useEffect, useState } from "react";
import { splitCountriesStringToArray } from "../utils/spitCountriesStringToArray";

const DinosaurDetail = () => {
  const [dinoData, setDinoData] = useState(null);
  const [foundIn, setFoundIn] = useState([]);
  const { dinosaurName } = useParams();

  const { data, error, loading } = useFetch(
    "https://chinguapi.onrender.com/dinosaurs"
  );

  // useGeocode custom hook. Returns a geocodeAddress function that takes an address (e.g., country name) and returns geocode lat/long information
  //can use returned coordinates to pass in as markers to the <DinoMap /> component
  const [coordinates, geocodeAddress] = useGeocode();

  // probably will want to cache this information so it's not hitting the api each time this component renders
  geocodeAddress(splitCountriesStringToArray(foundIn));

  const markers = Object.values(coordinates).map((item) => item);

  useEffect(() => {
    if (data) {
      const dino = data.find((dinosaur) => dinosaur.name === dinosaurName);
      setDinoData(dino);
      setFoundIn([dino.foundIn]);
    }
  }, [data, dinosaurName]);

  return (
    <div className="flex flex-col p-4 md:p-6 lg:p-8 xl:p-10 gap-8 md:gap-12 lg:gap-16 my-6 md:px-10 lg:px-16 xl:px-32 mb-20">
      {loading ? (
        <div className="flex justify-center items-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <>
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
                <span className="font-semibold">Length:</span>{" "}
                {dinoData?.length}m
              </p>
              <p>
                <span className="font-semibold">Diet:</span> {dinoData?.diet}
              </p>
              <p>
                <span className="font-semibold">When it lived:</span>{" "}
                {dinoData?.whenLived}
              </p>
              <p>
                <span className="font-semibold">Found in:</span>{" "}
                {dinoData?.foundIn}
              </p>
              <p>
                <span className="font-semibold">Named by:</span>{" "}
                {dinoData?.namedBy}
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
            <div>
              <h4 className="font-bold text-lg mb-4 w-full">
                Where did I live?
              </h4>
              <p className="text-[.95rem] leading-6 mb-6">
                The marker(s) below show the places in which the{" "}
                {dinoData?.name} has been found in.
              </p>
              <div className="max-w-[800px]">
                <DinoMap markers={markers}></DinoMap>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DinosaurDetail;
