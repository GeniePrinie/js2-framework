import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://api.noroff.dev/api/v1/online-shop/")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((product) => {
          return (
            product &&
            product.title &&
            product.title.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="mx-auto" style={{ width: "360px" }}>
      <div className="form-inline my-2 input-group mb-3">
        <input
          className="form-control"
          type="text"
          aria-label="Search"
          placeholder={"Type to search... "}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="btn btn-outline-secondary" type="submit">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </div>
  );
};
