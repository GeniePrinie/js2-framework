import React, { useEffect, useState } from "react";
import ProductsDisplay from "./GetProductsDisplay";

const url = "https://api.noroff.dev/api/v1/online-shop/";

function GetProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading products</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="container">
      <div className="card-container row justify-content-center gy-4 ">
        {products.map((product) => (
          <ProductsDisplay key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default GetProducts;
