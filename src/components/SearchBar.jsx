import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center rounded-3xl border border-gray-300 overflow-hidden text-[0.9rem] lg:flex-1 lg:max-w-[300px]">
      <input
        type="text"
        placeholder="Search..."
        className="focus:outline-none w-full bg-gray-200 p-2 px-4"
      />
      <button type="submit" className="bg-gray-200 p-2 px-4 ">
        <FontAwesomeIcon icon={faSearch} color="grey" />
      </button>
    </div>
  );
};

export default SearchBar;
