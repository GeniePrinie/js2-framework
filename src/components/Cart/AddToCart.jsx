import React from "react";

export function AddToCart({ addToCart }) {
  return (
    <button
      className="btn btn-primary text-light px-5"
      type="button"
      onClick={addToCart}
    >
      Add to Cart
    </button>
  );
}
