import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useHistory, Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import { categories } from "../data";

const StyledHeader = styled.h1`
  ${({ theme }) => `
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    color: ${theme.palette.fonts.titles};
    padding: 1.4rem 0;
    margin: 0;
  `}
`;

const StyledList = styled.ul`
  ${({ theme }) => `
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  li {
    padding: 0.8rem 0;
    color: ${theme.palette.fonts.categories};
  }
  li.selected {
    color: ${theme.palette.primary.main};
    font-weight: 600;
  }
  `}
`;

const StyledPrice = styled.div`
  form {
    display: flex;
    .MuiFormControl-root {
      margin: 4px 8px 4px 0px;
    }
    @media (min-width: 450px) and (max-width: 959px) {
      max-width: 200px;
    }
    @media (max-width: 959px) {
      flex-direction: column;
    }
  }
  input {
    padding: 0.5rem 0.5rem;
  }
  .MuiButton-contained {
    box-shadow: none;
  }
`;

const Filters = ({ selectedCategory }) => {
  let history = useHistory();
  let location = useLocation();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setMinPrice(params.get("minPrice") || "");
    setMaxPrice(params.get("maxPrice") || "");
  }, [location]);

  const handlePriceFilter = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(location.search);
    params.set("minPrice", minPrice);
    params.set("maxPrice", maxPrice);
    history.push(`${location.pathname}?${params.toString()}`);
  };

  return (
    <aside>
      <StyledHeader>All Categories</StyledHeader>
      <StyledList>
        {categories.map((category) => (
          <Link to={`/browse/${category.id}`} key={category.id}>
            <li
              className={category.id === selectedCategory ? "selected" : null}
            >
              {category.name}
            </li>
          </Link>
        ))}
      </StyledList>
      <StyledHeader>Filter by Price</StyledHeader>
      <StyledPrice>
        <form onSubmit={handlePriceFilter}>
          <FormControl variant="outlined">
            <OutlinedInput
              id="minPrice"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min"
              inputProps={{
                "aria-label": "minimum price filter",
                autoComplete: "off",
              }}
            />
          </FormControl>
          <FormControl variant="outlined">
            <OutlinedInput
              id="maxPrice"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max"
              inputProps={{
                "aria-label": "max price filter",
                autoComplete: "off",
              }}
            />
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Go
          </Button>
        </form>
      </StyledPrice>
    </aside>
  );
};

export default Filters;
