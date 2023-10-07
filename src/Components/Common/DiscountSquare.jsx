import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const DiscountOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--bs-primary);
  color: white;
  font-weight: bold;
  font-size: 17px;
  padding: 8px;
  border-radius: 5px;
`;

export const DiscountSquare = ({ discountPercentage }) => {
  if (discountPercentage > 0) {
    return (
      <DiscountOverlay>
        {Math.round(discountPercentage)}% off{"  "}
        <FontAwesomeIcon icon="fa-solid fa-fire" />
      </DiscountOverlay>
    );
  } else {
    return null;
  }
};
