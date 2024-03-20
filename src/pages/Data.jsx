import { useFetch } from "../hooks/useFetch";
import { PieChart } from "../components/PieChart";
import { DoughnutChart } from "../components/DoughnutChart";

const Data = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Data</h1>
      <p>
        Pie chart and doughnut charts illustrating the distribution of general
        dinosaur diet and type data.
      </p>
      <PieChart />
      <DoughnutChart />
    </div>
  );
};

export default Data;
