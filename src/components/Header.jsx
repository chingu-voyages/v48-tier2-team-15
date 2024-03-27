import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 sm:p-6 md:p-8 lg:px-10">
      <Link to="/">
        <h1 className="text-3xl md:text-4xl font-mountainsOfChristmas font-bold">
          DinoWorld
        </h1>
      </Link>

      {/* Mobile Nav */}
      {isOpen ? (
        <>
          <FontAwesomeIcon
            icon={faX}
            size="lg"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className="fixed top-0 left-0 h-full w-[85%] max-w-[450px] bg-slate-800 z-10">
            <div className="text-white p-4">
              <h2 className="text-3xl font-bold my-6">Menu</h2>
              <nav>
                <ul className="space-y-6">
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
        </>
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}

      {/* Desktop Nav */}
      <nav className="hidden md:flex text-[0.9rem] font-firaSans">
        <ul className="flex space-x-4 lg:space-x-8 text-green-800">
          <li>
            <Link
              to="/about"
              className="border-2 border-green-800 p-3 lg:px-4 rounded-3xl hover:bg-green-800 hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/go-digging"
              className="border-2 border-green-800 p-3 lg:px-4 rounded-3xl hover:bg-green-800 hover:text-white"
            >
              Go Digging
            </Link>
          </li>
          <li>
            <Link
              to="/data"
              className="border-2 border-green-800 p-3 lg:px-4 rounded-3xl hover:bg-green-800 hover:text-white"
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
