import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Cart = () => {
  const {
    isEmpty,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <div>Your Cart is empty</div>;
  return (
    <section className="py-4 container">
      <div className="row text-secondary">
        <h1>My Cart</h1>
        <div className="col-12">
          <table className="table table-primary table-borderless table-hover my-5">
            <thead>
              <tr>
                <th className="text-light bg-primary fs-5" scope="col">
                  Item
                </th>
                <th className="bg-primary" scope="col"></th>
                <th className="text-light bg-primary fs-5" scope="col">
                  Unit Price
                </th>
                <th className="text-light bg-primary fs-5" scope="col">
                  Quantity
                </th>
                <th className="text-light bg-primary fs-5" scope="col">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        style={{ maxWidth: "100px" }}
                      />
                    </td>
                    <td className="text-secondary fs-5">
                      <Link
                        to={`/product/${item.id}`}
                        className="text-decoration-none text-secondary"
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td className="text-secondary fs-5">
                      {item.discountedPrice}
                    </td>
                    <td className="text-secondary fs-5">
                      <FontAwesomeIcon
                        className="me-3 minus text-secondary"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        icon="fa-solid fa-circle-minus"
                      />
                      {item.quantity}
                      <FontAwesomeIcon
                        className="ms-3 plus text-secondary"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        icon="fa-solid fa-circle-plus"
                      />
                    </td>
                    <td>
                      <FontAwesomeIcon
                        className="ms-3 fs-4 text-primary trashcan"
                        icon="fa-solid fa-trash-can"
                        onClick={() => removeItem(item.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mb-2 fs-4">Total Items: {totalItems}</div>
        </div>
        <div
          className="container border-secondary mb-5"
          style={{ borderTop: "1px dashed" }}
        ></div>
        <div className="col-auto ms-auto ">
          <h2>Total: </h2>
        </div>
        <div className="col-auto fs-3">Kr {cartTotal}</div>
        <div>
          <Link to={`/purchasesuccess`}>
            <button
              className="btn btn-primary text-light m-2"
              onClick={() => emptyCart()}
            >
              Pay Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
