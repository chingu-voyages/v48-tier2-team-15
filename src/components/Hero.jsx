import heroDinoPic from "../assets/dinosaurs.png";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src={heroDinoPic}
        alt="Several dinosaurs standing near a lake, with lush greenery in the background"
        className="w-full h-[550px] md:h-[600px] lg:h-[700px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 font-firaSans">
            Welcome to DinoWorld
          </h1>
          <p className="text-md md:text-lg text-white">
            A place to discover all sorts of cool facts about dinosaurs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
