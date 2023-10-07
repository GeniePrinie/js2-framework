import React from "react";
import { Tag } from "./Tag";
import { Rating } from "./Rating";
import { Price } from "./Price";
import { Review } from "./Review";
import { useCart } from "react-use-cart";
import { DiscountSquare } from "./DiscountSquare";

export const Product = ({ data }) => {
  const { addItem } = useCart();

  return (
    <div className="row text-secondary">
      <div className="col-md position-relative">
        {" "}
        <img src={data.imageUrl} alt={data.title} style={{ width: "100%" }} />
        {data.discountedPrice && (
          <DiscountSquare
            discountPercentage={
              ((data.price - data.discountedPrice) / data.price) * 100
            }
          />
        )}
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
            <button
              className="btn btn-primary text-light px-5 my-4"
              onClick={() => addItem(data)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <Review product={data} />
      </div>
    </div>
  );
};
