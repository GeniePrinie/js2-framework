import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Navigation/Layout";
import { HomePage } from "./Pages/HomePage";
import { ContactPage } from "./Pages/ContactPage";
import { CheckoutPage } from "./Pages/CheckoutPage";
import { ProductPage } from "./Pages/ProductPage";
import { CheckoutSuccessPage } from "./Pages/CheckoutSuccessPage";

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
            <Route path="mycart" element={<CheckoutPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="purchasesuccess" element={<CheckoutSuccessPage />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
