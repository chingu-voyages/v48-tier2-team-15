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
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 text-4xl font-bold text-slate-600">
              Types of Dinosaurs
            </h2>
            <small className="italic max-w-[600px] mb-8">
              The total number of dinosaurs in this dataset is 316, the number
              in brackets represents the number of dinosaurs of that specific
              type of dinosaur.
            </small>
            <DoughnutChart data={data} height={700} width={1000} />
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 text-4xl font-bold text-slate-600">
              Dinosaur Diets
            </h2>
            <small className="italic max-w-[600px] mb-4">
              This chart shows the diet percentages for all given dinosaurs.
            </small>
            <PieChart data={data} height={700} width={1000} />
          </div>
        </div>
      )}
    </main>
  );
};

export default Data;
