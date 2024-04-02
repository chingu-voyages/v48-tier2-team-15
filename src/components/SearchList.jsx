import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import SearchListItem from "./SearchListItem";

// Implement a search feature allowing users to search for dinosaurs by name, weight, length, country and diet.

const SearchList = ({ query, setQuery }) => {
  const { data, error, loading } = useFetch(
    "https://chinguapi.onrender.com/dinosaurs"
  );

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      const filtered = data
        .filter((dino) => {
          return (
            dino.name.toLowerCase().includes(query.toLowerCase()) ||
            dino.weight.toString().includes(query) ||
            dino.length.toString().includes(query) ||
            dino.foundIn.toLowerCase().includes(query.toLowerCase()) ||
            dino.diet.toLowerCase().includes(query.toLowerCase())
          );
        })
        .slice(0, 5);

      setFilteredData(filtered);
    }
  }, [data, query]);

  return (
    <ul className="mt-2" onClick={() => setQuery("")}>
      {filteredData.length > 0 &&
        filteredData.map((dino) => <SearchListItem dino={dino} />)}
      {loading && <p className="text-sm p-4">Loading ...</p>}
    </ul>
  );
};

export default SearchList;
