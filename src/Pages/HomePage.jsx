import { useEffect, useState } from "react";
import { Products } from "../Components/Common/Products";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * HomePage component serves as the main page of The Boutique online shop.
 * It displays a list of products and provides a search functionality for users.
 * @component
 * @returns {JSX.Element} The HomePage component.
 */
export function HomePage() {
  /**
   * `search` is a state variable that holds the user's search query.
   * It is initialized as an empty string and updated when the user types into the search input.
   * @type {string} The user's search query.
   * @default ""
   */
  const [search, setSearch] = useState("");

  /**
   * `products` is a state variable that holds an array of products fetched from an API.
   * It is initialized as an empty array and updated using the `setProducts` function.
   * @type {Array} An array containing product data.
   * @default []
   */
  const [products, setProducts] = useState([]);
  const url = "https://api.noroff.dev/api/v1/online-shop/";

  useEffect(() => {
    /**
     * `fetchData` is an asynchronous function that fetches product data from the API
     * and updates the `products` state variable.
     */
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);

        // Set the document title and meta description for SEO purposes.
        document.title = "The Boutique | Home";
        const metaDescriptionTag = document.querySelector(
          'meta[name="description"]'
        );
        if (metaDescriptionTag) {
          metaDescriptionTag.setAttribute(
            "content",
            "Welcome to The Boutique! Explore our products."
          );
        }
      } catch (error) {
        console.log({ error });
      }
    }
    fetchData();
  }, []);

  /**
   * `filteredProducts` is an array of products filtered based on the user's search query.
   * If the search query is empty, it returns all products; otherwise, it filters products
   * based on whether the product title includes the search query (case-insensitive).
   * @type {Array} An array containing filtered product data.
   */

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const newFilteredProducts =
      search === ""
        ? products
        : products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
          );
    setFilteredProducts(newFilteredProducts);
  }, [search, products]);

  return (
    <div>
      <div className="container">
        <h1 className="text-secondary">Welcome to The Boutique!</h1>
        <p className="text-secondary">
          Need Help? Search bar is right below, or contact us in the Contact
          page. We hope you find what you're looking for. Good Luck!
        </p>
        <Form>
          <div
            className="mb-4"
            style={{
              maxWidth: "300px",
              height: "50px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <InputGroup className="my-3">
              <Form.Control
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Type to search..."
                className="border-primary"
                style={{
                  maxWidth: "300px",
                  height: "50px",
                  border: "2px dashed",
                  borderRadius: "25px",
                  paddingLeft: "35px",
                }}
              />

              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass"
                className="text-primary search-icon text-center"
                style={{
                  top: "15",
                  right: "20",
                  position: "absolute",
                }}
              />
            </InputGroup>
          </div>
        </Form>
      </div>
      <div>
        <Products data={filteredProducts} />
      </div>
    </div>
  );
}
