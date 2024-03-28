import Hero from "../components/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faMap } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faBarChart } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  return (
    <main>
      <Hero />
      {/* Some General Info */}
      <div className="w-[80%] max-w-[800px] mx-auto my-12">
        <h3 className="text-2xl font-firaSans mb-4">Lorem Ipsum</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sit
          autem dolore hic voluptatem porro cum sapiente accusamus eos quis
          possimus, magni adipisci. Exercitationem obcaecati cumque dolorum
          voluptate rerum optio!
        </p>
      </div>
      {/* Nav Cards */}
      <div className="w-[80%] max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-20 text-center">
        <Link to="/go-digging">
          <div className="border-black border-2 p-10 max-w-[400px] min-h-[250px] mx-auto">
            <FontAwesomeIcon icon={faMap} size="2xl" className="mb-6" />
            <h4 className="font-bold text-xl font-firaSans mb-4">Go Digging</h4>
            <p className="text-sm">Check out our interactive dinosaur map!</p>
          </div>
        </Link>

        <Link to="/data">
          <div className="border-black border-2 p-10 max-w-[400px] min-h-[250px] mx-auto">
            <FontAwesomeIcon icon={faBarChart} size="2xl" className="mb-6" />
            <h4 className="font-bold text-xl font-firaSans mb-4">Dino Data</h4>
            <p className="text-sm">Learn more about dinosaur diets & types</p>
          </div>
        </Link>

        <Link to="/about">
          <div className="border-black border-2 p-10 max-w-[400px] min-h-[250px] mx-auto">
            <FontAwesomeIcon icon={faCircleInfo} size="2xl" className="mb-6" />
            <h4 className="font-bold text-xl font-firaSans mb-4">About Us</h4>
            <p className="text-sm">
              Interested in knowing more about the project?
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Home;
