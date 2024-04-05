import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";
import SliderMenu from "./SliderMenu";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", to: "/about" },
  { name: "Data", to: "/data" },
];

const Header = () => {
  const [sliderMenuOpen, setSliderMenuOpen] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  // stop scrolling when slider menu is open
  useEffect(() => {
    if (searchBarVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [searchBarVisible]);

  return (
    <header className="p-6 md:px-8">
      {/* Mobile Layout */}
      <div className="md:hidden ">
        <div className="flex items-center justify-between">
          <FontAwesomeIcon
            icon={faBars}
            className="text-slate-500"
            onClick={() => setSliderMenuOpen(true)}
          />
          <Link to="/">
            <img src={logo} alt="DinoPedia" />
          </Link>
          <FontAwesomeIcon
            icon={faSearch}
            className="text-slate-500"
            onClick={() => setSearchBarVisible(true)}
          />
        </div>
        <SliderMenu isOpen={sliderMenuOpen} setIsOpen={setSliderMenuOpen} />
        {searchBarVisible && (
          <>
            <div
              className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50`}
              onClick={() => setSearchBarVisible(false)}
            ></div>

            <div className="fixed top-0 left-0 w-full z-[100] bg-opacity-50 flex justify-center">
              <div className="flex-1 p-4">
                <SearchBar onClose={() => setSearchBarVisible(false)} />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Tablet & Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between gap-8">
          <Link to="/">
            <img src={logo} alt="DinoPedia" />
          </Link>
          <nav>
            <ul
              className={`flex space-x-4 lg:space-x-6 ${
                searchBarVisible ? "hidden" : ""
              }`}
            >
              {navLinks.map(({ name, to }, index) => (
                <li
                  key={index}
                  className="bg-slate-700 text-white text-[0.95rem] rounded-3xl hover:bg-[#40826D]"
                >
                  <Link to={to}>
                    <p className="px-6 py-3">{name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:hidden">
            <FontAwesomeIcon
              icon={faSearch}
              onClick={() => setSearchBarVisible(true)}
              className="text-slate-500"
            />
            {searchBarVisible && (
              <>
                <div
                  className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50`}
                  onClick={() => setSearchBarVisible(false)}
                ></div>

                <div className="fixed top-0 left-0 w-full z-[100] bg-opacity-50 flex justify-center">
                  <div className="flex-1 p-4">
                    <SearchBar onClose={() => setSearchBarVisible(false)} />
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="hidden lg:block flex-1 max-w-[500px]">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
