import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartCount";
import styled from "styled-components";

const CartItself = styled.a`
  position: relative;
  padding: 16px;
`;

const CartNotification = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 22px;
  height: 22px;
  padding: 0px 5px;
  border-radius: 15px;
`;
function CartIcon() {
  const { cartCount } = useCart();

  return (
    <Link className="nav-link" to="/mycart">
      <CartItself>
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        {cartCount > 0 && (
          <CartNotification className="icon bg-primary text-light fs-6">
            {cartCount}
          </CartNotification>
        )}
      </CartItself>
    </Link>
  );
}

export default CartIcon;
