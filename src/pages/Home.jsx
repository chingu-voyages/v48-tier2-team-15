import Hero from "../components/Hero";
import NavCard from "../components/NavCard";
import { navCardData } from "../data/navCardData";

const Home = () => {
  return (
    <main>
      <Hero />
      {/* Some General Info */}
      <div className="w-[80%] max-w-[800px] mx-auto my-12 mb-20">
        <h3 className="text-xl mb-4 font-bold">Lorem Ipsum</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sit
          autem dolore hic voluptatem porro cum sapiente accusamus eos quis
          possimus, magni adipisci. Exercitationem obcaecati cumque dolorum
          voluptate rerum optio!
        </p>
      </div>
      {/* Nav Cards */}
      <div className="w-[80%] max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-24 text-center">
        {navCardData.map(({ title, description, to, icon }, index) => (
          <NavCard
            key={index}
            title={title}
            description={description}
            to={to}
            icon={icon}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
