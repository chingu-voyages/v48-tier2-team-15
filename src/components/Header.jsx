import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 sm:p-6 md:p-8 lg:px-10 gap-8 ">
      <Link to="/" className="xl:flex-1">
        <h1 className="text-3xl md:text-4xl font-mountainsOfChristmas font-bold">
          DinoWorld
        </h1>
      </Link>

      {/* Mobile Nav*/}
      {isOpen ? (
        <div className="fixed top-0 left-0 h-full w-full bg-black z-10">
          <FontAwesomeIcon
            icon={faX}
            size="lg"
            color="white"
            onClick={toggleMenu}
          />
          <div className="flex flex-col items-center text-white my-24">
            <h2 className="text-4xl font-bold mb-14">Menu</h2>
            <nav>
              <ul className="space-y-6 text-center">
                <li>
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/go-digging" onClick={() => setIsOpen(false)}>
                    Go Digging
                  </Link>
                </li>
                <li>
                  <Link to="/data" onClick={() => setIsOpen(false)}>
                    Data
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          onClick={toggleMenu}
          className="md:hidden"
        />
      )}

      {/* Desktop Nav */}
      <nav className="hidden md:flex text-[0.9rem] font-firaSans lg:flex-1 ml-4">
        <ul className="flex space-x-4 lg:space-x-8">
          <li>
            <Link
              to="/about"
              className="border-2 p-3 md:px-4 xl:px-6 rounded-3xl hover:bg-slate-100"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/go-digging"
              className="border-2 p-3 md:px-4 xl:px-6 rounded-3xl hover:bg-slate-100"
            >
              Go Digging
            </Link>
          </li>
          <li>
            <Link
              to="/data"
              className="border-2 p-3 md:px-4 xl:px-6 rounded-3xl hover:bg-slate-100"
            >
              Data
            </Link>
          </li>
        </ul>
      </nav>
      <SearchBar />
    </header>
  );
};

export default Header;
