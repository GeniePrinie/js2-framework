import { Link } from "react-router-dom";
import {
  loadFromLocalStorage,
  removeFromLocalStorage,
} from "../Utility/localStorage";

export function CheckoutSuccessPage() {
  const productItems = loadFromLocalStorage("productItems");
  const productTotalPrice = loadFromLocalStorage("productTotalPrice");

  return (
    <div className="container ">
      <div className="text-secondary fs-1 mb-5 text-center">
        Thank you for your purchase!
      </div>
      <div>
        <div className="text-secondary fs-4 mb-5">Your Order Summary</div>
        <div className="container">
          {productItems &&
            productItems.map((item, index) => {
              return (
                <div key={index} className="row">
                  <img
                    className="col"
                    src={item.imageUrl}
                    alt={item.title}
                    style={{ maxWidth: "100px" }}
                  />
                  <div className="text-secondary fs-5 col">{item.title}</div>
                  <div className="text-secondary fs-5 col">
                    Kr {item.discountedPrice}
                  </div>
                </div>
              );
            })}
          <div className="d-flex justify-content-center fs-3 mt-5">
            Total: Kr {productTotalPrice && productTotalPrice.toFixed(2)}
          </div>
        </div>
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
  );
}
