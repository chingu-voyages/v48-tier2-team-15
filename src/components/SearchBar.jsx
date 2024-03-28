import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = ({ target }) => {
    setSearchValue(target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`flex items-center rounded-3xl overflow-hidden border ${
        isFocused ? "bg-slate-600" : "border-slate-600"
      } hover:border-slate-600 hover:bg-slate-600`}
    >
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Search by name, age, diet ..."
        className="focus:outline-none w-full py-2 pl-6 text-[0.8rem] tracking-wide bg-inherit text-white"
      />
      <div>
        {searchValue === "" ? (
          <div className="py-2 px-6">
            <FontAwesomeIcon icon={faSearch} size="sm" color="lightgrey" />
          </div>
        ) : (
          <button className="py-2 px-6" onClick={() => setSearchValue("")}>
            <FontAwesomeIcon icon={faTimes} size="sm" color="lightgrey" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
