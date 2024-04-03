import { useParams } from "react-router-dom";
import DinoMap from '../components/DinoMap'
import { useFetch } from "../hooks/useFetch";
import { useGeocode } from "../hooks/useGeocode";


const DinosaurDetail = () => {
  const { dinosaurName } = useParams();

  // use useFetch hook to get details for a specific dinosaur (e.g., dino with id=1)
  // returned data.foundIn value can be used to 
  const { data, error, loading } = useFetch(
    "https://chinguapi.onrender.com/dinosaurs/1"
  );
  const foundIn = data["foundIn"]

  // useGeocode custom hook. Returns a geocodeAddress function that takes an address (e.g., country name) and returns geocode lat/long information
  //can use returned coordinates to pass in as markers to the <DinoMap /> component 
  const [coordinates, geocodeAddress] = useGeocode();

  // probably will want to cache this information so it's not hitting the api each time this component renders
  geocodeAddress(foundIn);

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
