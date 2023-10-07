import React from "react";
import { Link } from "react-router-dom";
import { DiscountSquare } from "./DiscountSquare";
import { Price } from "./Price";

export const Products = ({ data }) => {
  return (
    <div className="container">
      <div className="card-container row justify-content-center gy-4">
        {data.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="card-link text-decoration-none col-md-6 col-lg-4 col-xl-3 mb-4"
          >
            <div
              className="card border-0 shadow-sm"
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src={product.imageUrl}
                className="card-img-top "
                alt={product.title}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              {product.discountedPrice && (
                <DiscountSquare
                  discountPercentage={
                    ((product.price - product.discountedPrice) /
                      product.price) *
                    100
                  }
                />
              )}

              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-secondary">{product.title}</h5>
                <p className="card-text text-secondary">
                  {product.description}
                </p>

                <Price product={product} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
