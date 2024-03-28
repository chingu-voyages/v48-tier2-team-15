import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = ({ target }) => {
    setSearchValue(target.value);
  };

  return (
    <div className="hidden md:flex items-center rounded-3xl overflow-hidden bg-gray-100 border-2 border-gray-200 flex-1 max-w-[500px]">
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search..."
        className="focus:outline-none w-full py-2 px-6 text-sm tracking-wide bg-gray-100"
      />
      <div className="transition ease-in-out duration-1000">
        {searchValue === "" ? (
          <div className="py-2 px-6 ">
            <FontAwesomeIcon icon={faSearch} size="sm" color="grey" />
          </div>
        ) : (
          <button className="py-2 px-6" onClick={() => setSearchValue("")}>
            <FontAwesomeIcon icon={faX} size="sm" color="grey" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
