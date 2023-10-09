import React from "react";

/**
 * Price component displays the price of a product. If a discount is available,
 * it shows both the original price (with a strikethrough) and the discounted price.
 * If there's no discount, it displays the regular price.
 * @component
 * @param {Object} product - The product object containing price and discountedPrice properties.
 * @returns {JSX.Element} The Price component.
 */
export const Price = ({ product }) => {
  // Determine if the product has a discount and if the discounted price is different from the regular price.
  const hasDiscount =
    product.discountedPrice !== null && product.discountedPrice !== undefined;
  const samePrice = hasDiscount && product.discountedPrice === product.price;

  return (
    <div className="d-flex mt-auto justify-content-end align-items-end">
      {samePrice ? (
        <p className="marked-down-price text-primary fs-3 m-0">
          kr {product.discountedPrice}
        </p>
      ) : (
        <>
          <p className="original-price text-decoration-line-through mb-1 text-dark">
            kr {product.price}
          </p>
          <p className="marked-down-price text-primary fs-3 m-0 ms-3">
            kr {product.discountedPrice}
          </p>
        </>
      )}
    </div>
  );
};
