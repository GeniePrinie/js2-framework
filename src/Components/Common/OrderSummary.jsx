import { useCart } from "react-use-cart";

export const OrderSummary = () => {
  const { items, cartTotal } = useCart();
  return (
    <div>
      <div className="text-secondary fs-4 mb-5">Your Order Summary</div>
      <div className="container">
        {items.map((item, index) => {
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
          Total: Kr {cartTotal.toFixed(2)}
        </div>
      </div>
    </div>
  );
};
