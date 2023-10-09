import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../Components/Common/Product";

/**
 * ProductPage component displays detailed information about a single product
 * retrieved from an API based on the provided `id` parameter from the route.
 *
 * It uses React's `useState` and `useEffect` hooks to fetch and display the product data.
 * @component
 * @returns {JSX.Element} The ProductPage component.
 */
export function ProductPage() {
  /**
   * `product` is a state variable that holds the data of the fetched product.
   * It is initialized as an empty array and updated using the `setProduct` function.
   * @type {Array} An array containing the product data.
   * @default []
   */
  const [product, setProduct] = useState([]);

  /**
   * `id` is a variable that stores the product ID obtained from the route parameters.
   * It is extracted using the `useParams` hook.
   * @type {string} The product ID from the route parameters.
   */
  let { id } = useParams();
  const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);

        document.title = `The Boutique | ${json.title}`;
        const metaDescriptionTag = document.querySelector(
          'meta[name="description"]'
        );
        if (metaDescriptionTag) {
          metaDescriptionTag.setAttribute("content", json.description);
        }
      } catch (error) {
        console.log({ error });
      }
    }
    fetchData();
  }, [url]);

  return (
    <div className="container">
      <Product data={product} />
    </div>
  );
}
