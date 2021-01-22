import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import { products, categories } from "../data";
import ProductListings from "./ProductListings";

const StyledModal = styled.article`
  ${({ theme }) => ` 
    background-color: ${theme.palette.background};
    max-width: 60%;
    padding: 30px;
    box-shadow: 0 16px 34px 7px rgba(121,121,121,0.10);
    outline: 0;
    i:hover {
      cursor: pointer;
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
    .productName {
      font-size: 28px;
      color: ${theme.palette.fonts.productNames};
    }
    .productPrice {
      font-size: 30px;
      color: ${theme.palette.primary.main};
      font-weight: 700;
    }
    .productDescription {
      line-height: 30px;
    }
    @media (max-width: 800px) {
      max-width: 100%;
    }
`}
`;

const ProductDetail = () => {
  let params = useParams();
  let history = useHistory();
  const matchingProduct = products.find(
    (product) => product.id === Number(params.id)
  );
  const productCategory = categories.find(
    (category) => category.id === matchingProduct.categoryId
  );

  return (
    <>
      <ProductListings detailCategory={productCategory.id} />
      <Modal
        open={true}
        onClose={() => history.push(`/browse/${productCategory.id}`)}
        aria-labelledby={matchingProduct.name}
        aria-describedby={matchingProduct.description}
        BackdropProps={{ style: { backgroundColor: "rgba(255,255,255,0.86)" } }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StyledModal>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ textAlign: "right" }}>
              <i
                className="fa fa-times fa-2x"
                aria-hidden="true"
                onClick={() => history.push(`/browse/${productCategory.id}`)}
              ></i>
            </Grid>
            <Grid item xs={12} md={6} style={{ alignSelf: "center" }}>
              <img
                src={matchingProduct.images.large}
                alt={matchingProduct.name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <h1 className="productName">{matchingProduct.name}</h1>
              <p className="productPrice">${matchingProduct.price}</p>
              <p className="productDescription">
                {matchingProduct.description}
              </p>
            </Grid>
          </Grid>
        </StyledModal>
      </Modal>
    </>
  );
};

export default ProductDetail;
