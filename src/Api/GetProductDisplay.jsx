import React from "react";
import ReviewDisplay from "../components/ProductDisplayComponents/Reviews";
import TagDisplay from "../components/ProductDisplayComponents/Tags";
import RatingDisplay from "../components/ProductDisplayComponents/Ratings";
import PriceDisplay from "../components/Global/Price";
import AddToCart from "../components/ProductDisplayComponents/AddToCart";
import AddSubtractProduct from "../components/Global/AddSubtractProduct";
import { useCart } from "../components/Global/Navigation/CartCount";

function ProductDisplay({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="row text-secondary">
      <div className="col-md">
        <img
          src={product.imageUrl}
          alt={product.title}
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md ">
        <div
          className="border-secondary"
          style={{ borderBottom: "1px dashed" }}
        >
          <h1>{product.title}</h1>

          <TagDisplay product={product} />
          <RatingDisplay product={product} />

          <p className="fs-5">{product.description}</p>

          <PriceDisplay product={product} />

          <div className="d-flex align-items-center my-4">
            <AddSubtractProduct />

            <AddToCart product={product} addToCart={addToCart} />
          </div>
        </div>

        <ReviewDisplay product={product} />
      </div>
    </div>
  );
}

export default ProductDisplay;
