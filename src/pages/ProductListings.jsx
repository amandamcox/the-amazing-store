import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, Link, useLocation, useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Layout from "../components/Layout";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import FilterPillboxes from "../components/FilterPillboxes";
import { products } from "../data";

const ProductGrid = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-gap: 28px;
`;

const ProductListings = ({ detailCategory = 1 }) => {
  let params = useParams();
  let location = useLocation();
  let history = useHistory();
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [filters, setFilters] = useState({});
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    const filteredProducts = products
      .filter((product) =>
        filters.minPrice ? product.price > filters.minPrice : product.price
      )
      .filter((product) =>
        filters.maxPrice ? product.price < filters.maxPrice : product.price
      )
      .filter((product) =>
        filters.query
          ? product.name.toLowerCase().includes(filters.query)
          : product.name
      )
      .filter((product) => product.categoryId === selectedCategory);
    setProductList(filteredProducts);
  }, [filters, selectedCategory]);

  useEffect(() => {
    if (params.categoryId) {
      setFilters({});
      return setSelectedCategory(Number(params.categoryId));
    }
    setSelectedCategory(detailCategory);
  }, [params, detailCategory]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setFilters({
      minPrice: Number(searchParams.get("minPrice")) || null,
      maxPrice: Number(searchParams.get("maxPrice")) || null,
      query: searchParams.get("query") || null,
    });
  }, [location]);

  return (
    <Layout>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Filters selectedCategory={selectedCategory} />
          </Grid>
          <Grid item xs={12} md={9}>
            {Object.entries(filters).map(
              ([filterKey, value]) =>
                filters[filterKey] && (
                  <FilterPillboxes
                    key={`${filterKey}-${value}`}
                    filterName={filterKey}
                    filterValue={value}
                    onDelete={() => {
                      const params = new URLSearchParams(location.search);
                      params.set(filterKey, "");
                      history.push(`${location.pathname}?${params.toString()}`);
                    }}
                  />
                )
            )}
            {productList.length ? (
              <ProductGrid>
                {productList.map((product) => (
                  <Link to={`/product/${product.id}`} key={product.id}>
                    <ProductCard
                      id={product.id}
                      title={product.name}
                      image={product.images.medium}
                      price={product.price}
                    />
                  </Link>
                ))}
              </ProductGrid>
            ) : (
              <NoResults />
            )}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

const NoResults = () => (
  <>
    <h1>No Results</h1>
    <p>Try adjusting or removing some filters.</p>
  </>
);

export default ProductListings;
