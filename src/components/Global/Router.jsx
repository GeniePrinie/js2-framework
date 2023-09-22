import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Navigation/Layout";
import { Home, Products } from "../../Pages/ProductsPage";
import Contact from "../../Pages/ContactPage";
import MyCart from "../../Pages/MyCartPage";
import Product from "../../Pages/ProductPage";
import PurchaseSuccess from "../../Pages/CheckoutSuccessPage";
import { CartProvider } from "./Navigation/CartCount";

function RouteNotFound() {
  return <div>Page not found</div>;
}

function RouterPathway() {
  return (
    <Router>
      <CartProvider>
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route index element={<Products />} />
              <Route path="contact" element={<Contact />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="mycart" element={<MyCart />} />
              <Route path="purchasesuccess" element={<PurchaseSuccess />} />
              <Route path="*" element={<RouteNotFound />} />
            </Route>
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default RouterPathway;
