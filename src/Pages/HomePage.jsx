import { useEffect, useState } from "react";
import { Products } from "../Components/Common/Products";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export function HomePage() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const url = "https://api.noroff.dev/api/v1/online-shop/";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);

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

  let filteredProducts = products.filter((product) => {
    return search.toLowerCase() === ""
      ? product
      : product.title.toLowerCase().includes(search);
  });

  return (
    <div>
      <div className="container">
        <h1 className="text-secondary">Welcome to The Boutique!</h1>
        <p className="text-secondary">
          Need Help? Search bar is right below, or contact us in the Contact
          page. We hope you find what you're looking for. Good Luck!
        </p>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Type to search..."
            />
          </InputGroup>
        </Form>
      </div>
      <div>
        <Products data={filteredProducts} />
      </div>
    </div>
  );
}
