import React from "react";
import { Tag } from "./Tag";
import { Rating } from "./Rating";
import { Price } from "./Price";
import { Review } from "./Review";
import { AddToCart } from "../Cart/AddToCart";

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

          <Tag product={data} />
          <Rating product={data} />

          <p className="fs-5">{data.description}</p>

          <Price product={data} />

          <div className="d-flex align-items-center my-4">
            <AddToCart />
          </div>
        </div>

        <Review product={data} />
      </div>
    </div>
  );
};
