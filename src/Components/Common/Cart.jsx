import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveToLocalStorage } from "../../Utility/localStorage";

/**
 * Cart component displays the items in the user's shopping cart.
 * It allows users to view, update quantities, and remove items from the cart.
 * It also provides a "Pay Now" button to proceed with the purchase.
 * @component
 * @returns {JSX.Element} The Cart component.
 */
export const Cart = () => {
  // Use the `useCart` hook to access cart-related data and functions.
  const {
    isEmpty,
    totalItems,
    items,
    cartTotal,
    emptyCart,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty)
    return <div className="text-secondary fs-4">Your Cart is empty!</div>;
  return (
    <section className="py-4 container">
      <div className="row text-secondary ">
        <h1>My Cart</h1>
        <div>
          <div className="text-secondary p-3">
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="row mb-3 pb-2 border-secondary"
                  style={{ borderBottom: "1px dashed" }}
                >
                  <div className="col p-0">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{ maxWidth: "100px" }}
                    />
                  </div>
                  <div className="text-secondary fs-5 col col-sm-4 col-md-3">
                    <Link
                      to={`/product/${item.id}`}
                      className="text-decoration-none text-secondary link-hover"
                    >
                      {item.title}
                    </Link>
                  </div>
                  <div className="text-secondary fs-5 col">
                    Unit Price: Kr {item.discountedPrice}
                  </div>
                  <div className="text-secondary fs-5 text-center col-8 col-md-4 col-xl">
                    <FontAwesomeIcon
                      className="me-3 minus text-secondary"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      icon="fa-solid fa-circle-minus"
                    />
                    Quantity: {item.quantity}
                    <FontAwesomeIcon
                      className="ms-3 plus text-secondary"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      icon="fa-solid fa-circle-plus"
                    />
                  </div>
                  <div className="text-center col">
                    <FontAwesomeIcon
                      className="ms-3 fs-4 text-secondary trashcan"
                      icon="fa-solid fa-trash-can"
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mb-2 fs-4">Total Items: {totalItems}</div>
        </div>
        <div
          className="container border-secondary mb-5"
          style={{ borderTop: "1px dashed" }}
        ></div>
        <div className="col-auto ms-auto ">
          <h2>Total: </h2>
        </div>
        <div className="col-auto fs-3">Kr {cartTotal.toFixed(2)}</div>
        <div>
          <Link to={`/purchasesuccess`}>
            <button
              className="btn btn-primary text-light m-2"
              onClick={() => {
                saveToLocalStorage("productItems", items);
                saveToLocalStorage("productTotalPrice", cartTotal);
                emptyCart();
              }}
            >
              Pay Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
