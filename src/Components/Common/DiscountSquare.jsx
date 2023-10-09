import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

// Styled-components for custom styling.
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

/**
 * DiscountSquare component displays a discount overlay on product images when a discount is available.
 * It shows the discount percentage and a flame icon to indicate a hot deal.
 * @component
 * @param {number} discountPercentage - The discount percentage to be displayed.
 * @returns {JSX.Element} The DiscountSquare component.
 */
export const DiscountSquare = ({ discountPercentage }) => {
  
  // Display the discount overlay if the discountPercentage is greater than 0.
  if (discountPercentage > 0) {
    return (
      <DiscountOverlay>
        {Math.round(discountPercentage)}% off{"  "}
        <FontAwesomeIcon icon="fa-solid fa-fire" />
      </DiscountOverlay>
    );
  } else {

    // If no discount, return null (no overlay).
    return null;
  }
};
