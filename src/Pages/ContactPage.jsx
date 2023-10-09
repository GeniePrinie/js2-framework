import React, { useEffect } from "react";
import { Contact } from "../Components/Common/Contact";

/**
 * ContactPage component serves as the page for contacting The Boutique.
 * It sets the document title and meta description for SEO purposes.
 * @component
 * @returns {JSX.Element} The ContactPage component.
 */
export function ContactPage() {
  useEffect(() => {
    document.title = "The Boutique | Contact Us";
    const metaDescriptionTag = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute(
        "content",
        "Contact The Boutique for any inquiries or assistance."
      );
    }
  }, []);

  return (
    <div className="container text-secondary">
      <Contact />
    </div>
  );
}
