import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SearchList from "./SearchList";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <div className="flex flex-col relative">
      <div className="flex items-center bg-[#E6E6E6] rounded-3xl px-5 py-3 z-10">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          className="focus:outline-none w-full bg-inherit text-[0.85rem]"
        />
        {query === "" ? (
          <FontAwesomeIcon icon={faSearch} className="text-[#868686]" />
        ) : (
          <FontAwesomeIcon
            icon={faX}
            onClick={() => setQuery("")}
            className="cursor-pointer text-[#868686]"
          />
        )}
      </div>
      {query && (
        <div className="bg-[#E6E6E6] absolute top-0 w-full pt-10 rounded-3xl">
          {query && <SearchList query={query} setQuery={setQuery} />}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
