import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";

const navLinks = [
  { name: "About", to: "/about" },
  { name: "Go Digging", to: "/go-digging" },
  { name: "Data", to: "/data" },
];

const Header = () => {
  return (
    <header className="p-6 md:px-8">
      {/* Mobile Layout */}
      <div className="md:hidden ">
        <div className="flex items-center justify-between">
          <FontAwesomeIcon icon={faBars} className="text-slate-500" />
          <Link to="/">
            <img src={logo} alt="DinoPedia" />
          </Link>
          <FontAwesomeIcon icon={faSearch} className="text-slate-500" />
        </div>
      </div>

      {/* Tablet & Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between gap-8">
          <Link to="/">
            <img src={logo} alt="DinoPedia" />
          </Link>
          <nav>
            <ul className="flex space-x-4 lg:space-x-6">
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
            <FontAwesomeIcon icon={faSearch} className="text-slate-500" />
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
