import { useParams } from "react-router-dom";
import DinoMap from '../components/DinoMap'

const DinosaurDetail = () => {
  const { dinosaurName } = useParams();
  console.log(dinosaurName);
  
  return (
    <div>
      <h1 className="text-2xl font-semibold">Dinosaur Detail View</h1>
      <p>
        This page will show all the information relating to a specific dinosaur.
      </p>
      <DinoMap></DinoMap>
    </div>
  );
};

export default DinosaurDetail;
