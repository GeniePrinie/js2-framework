import React from "react";
import ProductsDisplay from "./ProductsDisplayComponents/ProductsDisplay";

export const Products = ({ data }) => {
  return (
    <div className="container">
      <div className="card-container row justify-content-center gy-4">
        {data.map((product) => (
          <ProductsDisplay key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
