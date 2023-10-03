import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Global/Navigation/Layout";
import { HomePage } from "./Pages/HomePage";
import Contact from "./Pages/ContactPage";
import MyCart from "./Pages/MyCartPage";
import ProductPage from "./Pages/ProductPage";
import PurchaseSuccess from "./Pages/CheckoutSuccessPage";

function RouteNotFound() {
  return <div>Page not found</div>;
}

function RouterPathway() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="mycart" element={<MyCart />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="purchasesuccess" element={<PurchaseSuccess />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default RouterPathway;
