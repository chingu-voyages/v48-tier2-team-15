import Hero from "../components/Hero";
import NavCard from "../components/NavCard";
import { navCardData } from "../data/navCardData";

const Home = () => {
  return (
    <main>
      <Hero />
      {/* Some General Info */}
      <div className="w-[80%] max-w-[800px] mx-auto my-12 mb-20">
        <h3 className="text-xl mb-4 font-bold">What is DinoPedia?</h3>
        <p>
          Think of it as a digital encyclopedia filled to the brim with dino
          data straight from the National History Museum. You'll find pictures,
          detailed info on diets, species, and more, plus some cool data charts
          to geek out over. Whether you're a dino enthusiast or just curious
          about these ancient creatures, DinoPedia's got you covered with all the
          facts!
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
