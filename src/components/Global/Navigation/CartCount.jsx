import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

const useCart = () => {
  return useContext(CartContext);
};

function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const removeFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  const cartData = {
    cartCount,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
}

export { CartProvider, useCart };
