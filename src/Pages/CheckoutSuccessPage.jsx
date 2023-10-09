import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  loadFromLocalStorage,
  removeFromLocalStorage,
} from "../Utility/localStorage";
import BackgroundImage from "../Image/bg-img.png";

/**
 * CheckoutSuccessPage component serves as the confirmation page after a successful purchase.
 * It displays an order summary and allows the user to return to the store.
 * It also sets the document title and meta description for SEO purposes.
 * @component
 * @returns {JSX.Element} The CheckoutSuccessPage component.
 */
export function CheckoutSuccessPage() {
  /**
   * `productItems` is an array that stores the purchased items retrieved from local storage.
   * @type {Array} An array containing purchased product items.
   */
  const productItems = loadFromLocalStorage("productItems");

  /**
   * `productTotalPrice` is a number that stores the total price of the purchased items retrieved from local storage.
   * @type {number} The total price of purchased items.
   */
  const productTotalPrice = loadFromLocalStorage("productTotalPrice");

  useEffect(() => {
    document.title = "The Boutique | Checkout Success";
    const metaDescriptionTag = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute(
        "content",
        "Thank you for your purchase at The Boutique. View your order summary here."
      );
    }
  }, []);

  const bodyStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "calc(100vh - 56px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <div className="container " style={bodyStyle}>
      <div>
        <div className="container text-secondary card shadow bg-light py-5 border-0">
          <div
            className="text-secondary fs-1  pb-5 text-center border-secondary"
            style={{ borderBottom: "1px dashed" }}
          >
            Thank you for your purchase!
          </div>
          <div
            className="text-secondary fs-4 py-3 mb-3 text-start border-secondary"
            style={{ borderBottom: "1px dashed" }}
          >
            Your Order Summary:
          </div>
          {productItems &&
            productItems.map((item, index) => {
              return (
                <div key={index} className="row pb-3">
                  <img
                    className="col"
                    src={item.imageUrl}
                    alt={item.title}
                    style={{ maxWidth: "100px" }}
                  />
                  <div className="text-secondary fs-5 col">{item.title}</div>
                  <div className="text-secondary fs-5 col">
                    Quantity: {item.quantity}
                  </div>

                  <div className="text-secondary fs-5 col">
                    Unit price: {item.discountedPrice}
                  </div>
                  <div className="text-secondary fs-5 col">
                    Subtotal: Kr {item.itemTotal}
                  </div>
                </div>
              );
            })}
          <div
            className="text-center fs-3 pt-3 border-secondary"
            style={{ borderTop: "1px dashed" }}
          >
            Total: Kr {productTotalPrice && productTotalPrice.toFixed(2)}
          </div>
          <Link to={`/`}>
            <button
              className="btn btn-primary text-light px-5 mt-5"
              type="button"
              onClick={() => {
                removeFromLocalStorage("productItems");
                removeFromLocalStorage("productTotalPrice");
              }}
            >
              Back to the store
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
