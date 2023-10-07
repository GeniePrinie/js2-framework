import React from "react";

export const Rating = ({ product }) => {
  const rating =
    product.rating !== null && product.rating !== undefined
      ? product.rating
      : 0;
  return <p className="fs-5">Rating: {rating}/5</p>;
};
