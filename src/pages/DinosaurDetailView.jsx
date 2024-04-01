import { useParams } from "react-router-dom";
import DinoMap from '../components/DinoMap'
import { useFetch } from "../hooks/useFetch";


const DinosaurDetail = () => {
  const { dinosaurName } = useParams();
  const { data, error, loading } = useFetch(
    "https://chinguapi.onrender.com/dinosaurs/1"
  );

  // const foundIn = data["foundIn"]
    // add hook to get geocoded location data

  const markers = [{"lat": -30.559482, "lng": 22.937506}]  
  return (
    <div>
      <h1 className="text-2xl font-semibold">Dinosaur Detail View</h1>
      <p>
        This page will show all the information relating to a specific dinosaur.
      </p>
      <DinoMap markers={markers}></DinoMap>
    </div>
  );
};

export default DinosaurDetail;
