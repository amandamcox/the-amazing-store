import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const StyledCard = styled(Card)`
  ${({ theme }) => `
  box-shadow: 0 4px 14px 7px rgba(121, 121, 121, 0.05);
  text-align: center;
  height: 100%;
  position: relative;
  &.MuiPaper-outlined {
    border: 1px solid ${theme.palette.cards.border};
    :hover {
      border: 1px solid ${theme.palette.cards.hoverBorder};
      cursor: pointer;
    }
  }
  h1.productName {
    font-size: 20px;
    color: ${theme.palette.fonts.productNames};
    padding: 15px 0px 30px 0px;
  }
  p.price {
    color: ${theme.palette.primary.main};
    font-size: 18px;
    font-weight: 600;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  `}
`;

const ProductCard = ({ image, title, price }) => {
  return (
    <StyledCard variant="outlined">
      <CardContent>
        <img src={image} alt={title} />
        <h1 className="productName">{title}</h1>
        <p className="price">${price}</p>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
