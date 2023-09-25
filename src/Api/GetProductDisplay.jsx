import React from "react";
import ReviewDisplay from "../Components/ProductDisplayComponents/Reviews";
import TagDisplay from "../Components/ProductDisplayComponents/Tags";
import RatingDisplay from "../Components/ProductDisplayComponents/Ratings";
import PriceDisplay from "../Components/Global/Price";
import AddToCart from "../Components/ProductDisplayComponents/AddToCart";
import { useCart } from "../Components/Global/Navigation/CartCount";

function ProductDisplay({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="row text-secondary">
      <div className="col-md mb-3 m-md-0">
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
          <AddToCart product={product} addToCart={addToCart} />
        </div>
        <ReviewDisplay product={product} />
      </div>
    </div>
  );
}

export default ProductDisplay;
