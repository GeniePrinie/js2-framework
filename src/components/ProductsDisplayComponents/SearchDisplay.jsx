import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

function SearchDisplay() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <SearchBar setResults={setResults} />
      <SearchResultsList results={results} />
    </div>
  );
}

export default SearchDisplay;
