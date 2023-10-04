import React from "react";

function ReviewDisplay({ product }) {
  const numberOfReviews = product.reviews ? product.reviews.length : 0;
  console.log({ product });
  return (
    <div>
      <div className="my-3">
        <h2>Reviews: ({numberOfReviews})</h2>
      </div>
      <div>
        {product &&
          product.reviews &&
          product.reviews.map((review) => (
            <div
              key={review.id}
              className="card bg-info border-0 shadow p-3 text-secondary mb-3"
            >
              <h3 className="fs-5">Rating: {review.rating}</h3>
              <p>{review.description}</p>
              <p>
                <b>{review.username}</b>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ReviewDisplay;
