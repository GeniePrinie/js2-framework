import { useEffect, useState } from "react";
import { Products } from "../Components/Common/Products";

export function HomePage() {
  const [products, setProducts] = useState([]);
  const url = "https://api.noroff.dev/api/v1/online-shop/";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.log({ error });
      }
    }
    fetchData();
  }, []);

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
        {/* <SearchBar setResults={setResults} />
        {results.length === 0 ? ( */}
        <Products data={products} />
        {/* ) : (
          <SearchResultsList results={results} />
        )} */}
      </div>
    </div>
  );
}
