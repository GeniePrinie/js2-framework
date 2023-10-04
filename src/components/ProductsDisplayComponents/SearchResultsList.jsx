import React from "react";
import ProductsDisplay from "./ProductsDisplay";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="container">
      <div className="row">
        {results.map((result, id) => {
          return <ProductsDisplay product={result} key={id} />;
        })}
      </div>
    </div>
  );
};
