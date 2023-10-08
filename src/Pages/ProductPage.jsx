import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../Components/Common/Product";

export function ProductPage() {
  const [product, setProduct] = useState([]);
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
