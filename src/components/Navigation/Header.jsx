import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import styled from "styled-components";

const CartIcon = () => {
  const { totalItems } = useCart();

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

  return (
    <Link className="nav-link" to="/mycart">
      <CartItself>
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        {totalItems > 0 && (
          <CartNotification className="icon bg-primary text-light fs-6">
            {totalItems}
          </CartNotification>
        )}
      </CartItself>
    </Link>
  );
};

export const Header = () => {
  return (
    <header>
      <div className="container">
        <nav
          className="nav d-flex flex-wrap justify-content-center mb-5 py-2 fs-3 border-secondary "
          style={{ borderBottom: "1px dashed" }}
        >
          <Link
            className="nav-link d-flex logo align-self-center mb-3 mb-md-0 me-md-auto"
            to="/"
          >
            The Boutique
          </Link>
          <ul className="nav">
            <li className="nav-item  align-self-center">
              <Link className="nav-link" to="/">
                Products
              </Link>
            </li>
            <li className="nav-item align-self-center">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item align-self-center">
              <CartIcon />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
