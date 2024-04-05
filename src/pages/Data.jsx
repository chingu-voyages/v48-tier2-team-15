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
        <div className="flex">
          <PieChart data={data} height={500} width={700} />
          <DoughnutChart data={data} height={500} width={700} />
        </div>
      )}
    </main>
  );
};

export default Data;
