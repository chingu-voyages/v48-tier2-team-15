import { faBars, faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSearching, setMobileSearching] = useState(false);

  return (
    <header className="p-4 py-6 md:p-8 lg:px-10 bg-slate-800 text-white">
      {/* Mobile Layout */}
      <div className="md:hidden ">
        <div className="flex items-center justify-between ">
          <div className="bg-slate-700 p-3 px-4 rounded-full">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
          <Link to="/">
            <h1 className="text-3xl md:text-4xl font-mountainsOfChristmas font-bold">
              DinoWorld
            </h1>
          </Link>
          <div className="bg-slate-700 p-3 px-4 rounded-full">
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              onClick={() => setMobileSearching(!mobileSearching)}
            />
          </div>
        </div>
      </div>

      {/* Tablet & Desktop Layout */}
      <div className="hidden md:block">
        <div className=" flex items-center justify-between">
          <Link to="/">
            <h1 className="text-3xl md:text-4xl font-mountainsOfChristmas font-bold pr-4">
              DinoWorld
            </h1>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/about"
                  className="border-2 border-slate-600 text-[0.95rem] p-3 px-4 rounded-3xl hover:bg-[#40826D]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/go-digging"
                  className="border-2 border-slate-600 text-[0.95rem] p-3 px-4  rounded-3xl hover:bg-[#40826D]"
                >
                  Go Digging
                </Link>
              </li>
              <li>
                <Link
                  to="/data"
                  className="border-2 border-slate-600 text-[0.95rem] p-3 px-4  rounded-3xl hover:bg-[#40826D]"
                >
                  Data
                </Link>
              </li>
            </ul>
          </nav>
          <div className="bg-slate-700 p-3 px-4 rounded-full lg:hidden">
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              onClick={setMobileSearching}
            />
          </div>
          <div className="hidden lg:block flex-1 max-w-[450px] relative">
            <SearchBar />
          </div>
        </div>
      </div>
      {/* Full Screen Mobile Search */}
      {mobileSearching && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 text-white z-10">
          <div className="flex flex-row-reverse p-4 py-6 gap-2 items-center justify-center">
            <FontAwesomeIcon
              icon={faX}
              size="lg"
              color="lightgrey"
              className="bg-slate-700 p-3 px-4 rounded-full"
              onClick={() => setMobileSearching(!mobileSearching)}
            />
            <div className="flex-1 max-w-[500px]">
              <SearchBar />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
