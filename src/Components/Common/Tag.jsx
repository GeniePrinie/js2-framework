import React from "react";

/**
 * Tag component displays product tags as badges.
 * @component
 * @param {Object} product - The product object containing tags property.
 * @returns {JSX.Element} The Tag component.
 */
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
