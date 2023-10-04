import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const CartIcon = ({ cartCount }) => {
  return (
    <Link className="nav-link" to="/mycart">
      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
      {cartCount > 0 && <span className="badge bg-primary">{cartCount}</span>}
    </Link>
  );
};
