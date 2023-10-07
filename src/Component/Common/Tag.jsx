import React from "react";

export const Tag = ({ product }) => {
  return (
    <p className="fs-5">
      {product &&
        product.tags &&
        product.tags.map((tag, index) => (
          <span key={index} className="badge badge-secondary bg-primary me-2">
            {tag}
          </span>
        ))}
    </p>
  );
};
