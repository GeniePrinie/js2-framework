import { Link } from "react-router-dom";

export function PurchaseSuccessPage() {
  return (
    <div className="container ">
      <div className=" text-secondary fs-1 mb-5 text-center">
        Thank you for your purchase!
      </div>
      <Link to={`/`}>
        <button className="btn btn-primary text-light px-5 mt-5" type="button">
          Back to the store
        </button>
      </Link>
    </div>
  );
}
