import { useFetch } from "../hooks/useFetch";
import PieChart from "../components/PieChart";
import DoughnutChart from "../components/DoughnutChart";
import pieChartImg from "../assets/pie.png";
import doughnutChartImg from "../assets/doughnut.png";

const Data = () => {
  const { data, error, loading } = useFetch(
    "https://chinguapi.onrender.com/dinosaurs"
  );

  return (
    <main>
      {error && <>{error.message}</>}
      {loading ? (
        <div className="flex flex-col items-center p-4 md:p-6 lg:p-8 xl:p-10 gap-8 md:gap-12 lg:gap-16 my-6 md:px-10 lg:px-16 xl:px-32 mb-20">
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
        <div className="w-full h-full object-contain flex flex-col items-center my-20 space-y-32">
          <div className="flex flex-col items-center text-center p-2">
            <h2 className="text-center flex-col text-3xl font-bold mb-6 tracking-widest">
              Types of Dinosaurs
            </h2>
            <small className="italic max-w-[600px] mb-8">
              The total number of dinosaurs in this dataset is 316, the number
              in brackets represents the number of dinosaurs of that specific
              type of dinosaur.
            </small>
            <div className="flex lg:hidden">
              <img
                src={doughnutChartImg}
                alt="Doughnut chart of types of dinosaurs"
              />
            </div>
            <div className="hidden lg:flex">
              <DoughnutChart data={data} height={700} width={1000} />
            </div>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <h2 className="mb-6 text-center flex-col text-3xl font-bold tracking-widest">
              Dinosaur Diets
            </h2>
            <small className="italic max-w-[600px] mb-4">
              This chart shows the diet percentages for all given dinosaurs.
            </small>
            <div className="flex lg:hidden">
              <img src={pieChartImg} alt="Pie chart of dinosaur diets" />
            </div>
            <div className="hidden lg:flex">
              <PieChart data={data} height={700} width={1000} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Data;
