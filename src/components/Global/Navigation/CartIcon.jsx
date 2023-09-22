import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddToCart from "../../ProductDisplayComponents/AddToCart";

function CartIcon({ cartCount }) {
  return (
    <Link className="nav-link" to="/mycart">
      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
      {cartCount > 0 && <span className="badge bg-primary">{cartCount}</span>}
    </Link>
  );
}

function ShoppingCart() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <CartIcon cartCount={cartCount} />
    </div>
  );
}

export default ShoppingCart;
