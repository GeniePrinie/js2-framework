import React from "react";

export function Price({ product }) {
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
}
