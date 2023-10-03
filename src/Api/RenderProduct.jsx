import React from "react";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplayComponents/ProductDisplay";
import useFetchData from "./FetchData";

const RenderProduct = () => {
  let { id } = useParams();
  const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;
  const { product, isLoading, isError } = useFetchData(url);

  if (isLoading) {
    return <div>Loading product</div>;
  }

  if (isError) {
    return <div>Error loading product</div>;
  }

  return (
    <div>
      <ProductDisplay key={product.id} product={product} />
    </div>
  );
};

export default RenderProduct;
