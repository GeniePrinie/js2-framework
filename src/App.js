import "./App.css";
import React from "react";
import { RouterPathway } from "./Router";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div>
      <CartProvider>
        <RouterPathway />
      </CartProvider>
    </div>
  );
}

export default App;
