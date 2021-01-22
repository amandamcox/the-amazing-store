import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";

const StyledSearchContainer = styled.div`
  ${({ theme }) => `
    position: relative;
    border-radius: 4px;
    background-color: ${theme.palette.background};
    width: 50%;
    min-width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
   `}
`;

const StyledSearchIcon = styled.div`
  position: absolute;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const StyledInput = styled(InputBase)`
  margin-left: 50px;
  width: 100%;
`;

const SearchBar = () => {
  let location = useLocation();
  let history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchQuery(params.get("query") || "");
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(location.search);
    params.set("query", searchQuery);
    history.push(`${location.pathname}?${params.toString()}`);
  };

  return (
    <StyledSearchContainer>
      <StyledSearchIcon>
        <i
          className="fa fa-search fa-lg"
          aria-hidden="true"
          onClick={handleSearch}
        ></i>
      </StyledSearchIcon>
      <form onSubmit={handleSearch}>
        <StyledInput
          placeholder="Search products by name..."
          inputProps={{ "aria-label": "search products by name" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </StyledSearchContainer>
  );
};

export default SearchBar;
