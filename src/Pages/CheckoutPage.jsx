import React, { useEffect } from "react";
import { Cart } from "../Components/Common/Cart";

/**
 * CheckoutPage component serves as the page for reviewing and completing a purchase.
 * It sets the document title and meta description for SEO purposes.
 * @component
 * @returns {JSX.Element} The CheckoutPage component.
 */
export function CheckoutPage() {
  useEffect(() => {
    document.title = "The Boutique | My Cart";
    const metaDescriptionTag = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute(
        "content",
        "View what's in your shopping cart and complete your purchase at The Boutique's checkout page."
      );
    }
  }, []);

  return (
    <div className="container text-secondary">
      <Cart />
    </div>
  );
}
