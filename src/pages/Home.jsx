import Hero from "../components/Hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <div className="w-[80%] max-w-[800px] mx-auto my-6">
        <h3 className="text-2xl font-bold font-firaSans mb-4">Lorem Ipsum</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sit
          autem dolore hic voluptatem porro cum sapiente accusamus eos quis
          possimus, magni adipisci. Exercitationem obcaecati cumque dolorum
          voluptate rerum optio!
        </p>
      </div>
    </main>
  );
};

export default Home;
