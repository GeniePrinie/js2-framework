import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AddSubtractProduct() {
  return (
    <div className="d-flex align-items-center">
      <div>
        <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
      </div>
      <div className="mx-3">1</div>
      <div>
        <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
      </div>
    </div>
  );
}

export default AddSubtractProduct;
