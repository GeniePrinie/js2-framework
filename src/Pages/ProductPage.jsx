import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../Components/Product";

function ProductPage() {
  const [product, setProduct] = useState([]);
  let { id } = useParams();
  const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
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

export default ProductPage;
