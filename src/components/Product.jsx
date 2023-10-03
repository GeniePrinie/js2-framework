import React from "react";
import PriceDisplay from "./Global/Price";
import AddToCart from "./ProductDisplayComponents/AddToCart";
import RatingDisplay from "./ProductDisplayComponents/Ratings";
import ReviewDisplay from "./ProductDisplayComponents/Reviews";
import TagDisplay from "./ProductDisplayComponents/Tags";

export const Product = ({ data }) => {
  return (
    <div className="row text-secondary">
      <div className="col-md">
        <img src={data.imageUrl} alt={data.title} style={{ width: "100%" }} />
      </div>
      <div className="col-md ">
        <div
          className="border-secondary"
          style={{ borderBottom: "1px dashed" }}
        >
          <h1>{data.title}</h1>

          <TagDisplay product={data} />
          <RatingDisplay product={data} />

          <p className="fs-5">{data.description}</p>

          <PriceDisplay product={data} />

          <div className="d-flex align-items-center my-4">
            <AddToCart />
          </div>
        </div>

        <ReviewDisplay product={data} />
      </div>
    </div>
  );
};
