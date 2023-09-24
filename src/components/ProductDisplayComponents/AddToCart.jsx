import React from "react";

function AddToCart({ addToCart }) {
  return (
    <button
      className="btn btn-primary text-light px-5 my-4"
      type="button"
      onClick={addToCart}
    >
      Add to Cart
    </button>
  );
}

export default AddToCart;
