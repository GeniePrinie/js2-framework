import React from "react";

function TagDisplay({ product }) {
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
}

export default TagDisplay;
