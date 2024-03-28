import { useFetch } from "../hooks/useFetch";
import PieChart from "../components/PieChart";
import DoughnutChart from "../components/DoughnutChart";

const Data = () => {
  const { data, error, loading } = useFetch(
    "https://chinguapi.onrender.com/dinosaurs"
  );

  return (
    <main>
      {error && <>{error.message}</>}
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div className="flex">
          <PieChart data={data} height={500} width={700} />
          <DoughnutChart data={data} height={500} width={700} />
        </div>
      )}
    </main>
  );
};

export default Data;
