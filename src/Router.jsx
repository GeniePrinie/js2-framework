import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Navigation/Layout";
import { HomePage } from "./Pages/HomePage";
import { ContactPage } from "./Pages/ContactPage";
import { CartPage } from "./Pages/CartPage";
import { ProductPage } from "./Pages/ProductPage";
import { PurchaseSuccessPage } from "./Pages/PurchaseSuccessPage";

function RouteNotFound() {
  return <div>Page not found</div>;
}

export function RouterPathway() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="mycart" element={<CartPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="purchasesuccess" element={<PurchaseSuccessPage />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
