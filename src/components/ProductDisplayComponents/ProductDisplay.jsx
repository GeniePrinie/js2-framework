import React from "react";
import ReviewDisplay from "./Reviews";
import TagDisplay from "./Tags";
import RatingDisplay from "./Ratings";
import PriceDisplay from "../Global/Price";
import AddToCart from "./AddToCart";

function ProductDisplay({ product }) {
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
            <AddToCart />
          </div>
        </div>

        <ReviewDisplay product={product} />
      </div>
    </div>
  );
}

export default ProductDisplay;
