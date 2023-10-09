import React from "react";

/**
 * Rating component displays the rating of a product on a scale of 0 to 5.
 * @component
 * @param {Object} product - The product object containing the rating property.
 * @returns {JSX.Element} The Rating component.
 */
export const Rating = ({ product }) => {
  // Extract the rating value from the product object or default to 0 if not provided.
  const rating =
    product.rating !== null && product.rating !== undefined
      ? product.rating
      : 0;
  return <p className="fs-5">Rating: {rating}/5</p>;
};
