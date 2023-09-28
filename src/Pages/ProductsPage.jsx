import { useState } from "react";
import GetProducts from "../Api/GetProducts";
import { SearchBar } from "../Components/ProductsDisplayComponents/SearchBar";
import SearchResultsList from "../Components/ProductsDisplayComponents/SearchResultsList";

function Home() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <div className="container">
        <h1 className="text-secondary">Welcome to The Boutique!</h1>
        <p className="text-secondary">
          Need Help? Search bar is right below, or contact us in the Contact
          page. We hope you find what you're looking for. Good Luck!
        </p>
      </div>

      <div>
        <SearchBar setResults={setResults} />
        {results.length === 0 ? (
          <GetProducts />
        ) : (
          <SearchResultsList results={results} />
        )}
      </div>
    </div>
  );
}

function Products() {
  return <div></div>;
}

export { Home, Products };
