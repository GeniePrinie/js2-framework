import { Link } from "react-router-dom";
import { OrderSummary } from "../Components/Common/OrderSummary";
import { useCart } from "react-use-cart";

export function CheckoutSuccessPage() {
  const { emptyCart } = useCart();
  return (
    <div className="container ">
      <div className="text-secondary fs-1 mb-5 text-center">
        Thank you for your purchase!
      </div>
      <OrderSummary />
      <Link to={`/`}>
        <button
          className="btn btn-primary text-light px-5 mt-5"
          type="button"
          onClick={() => emptyCart()}
        >
          Back to the store
        </button>
      </Link>
    </div>
  );
}
