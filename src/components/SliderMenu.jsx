import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Data", to: "/data" },
];

const SliderMenu = ({ isOpen, setIsOpen }) => {
  // stop scrolling when slider menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50 transition-opacity ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`bg-slate-700 fixed top-0 left-0 w-[80%] h-full z-50 p-6 text-white transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } duration-700`}
      >
        <div className="flex flex-col items-center text-center">
          <FontAwesomeIcon
            icon={faX}
            className="absolute top-5 right-5 bg-slate-500 p-2 px-3 rounded-full text-slate-600 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          <h2 className="text-3xl font-bold tracking-wider my-12">Menu</h2>
          <ul className="list-none space-y-8">
            {navLinks.map(({ name, to }, index) => {
              return (
                <li key={index} onClick={() => setIsOpen(false)}>
                  <Link to={to} onClick={setIsOpen}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SliderMenu;
