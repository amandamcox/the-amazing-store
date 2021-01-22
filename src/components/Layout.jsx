import * as React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const LayoutGrid = styled.article`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;

const Navigation = styled.nav`
  ${({ theme }) => `
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	background-color: ${theme.palette.primary.main};
	border-top: 9px solid ${theme.palette.secondary.main};
	padding: 50px 0px;
	h1 {
		color: ${theme.palette.fonts.logo};
		font-size: 36px;
		font-weight: 700;
		max-width: 200px;
		margin: 0;
	}
	`}
`;

const StyledFooter = styled.footer`
  padding: 20px;
  text-align: center;
  font-size: 0.95rem;
`;

const Layout = ({ children }) => {
  return (
    <LayoutGrid>
      <header>
        <Navigation>
          <h1>Amazing Store</h1>
          <SearchBar />
        </Navigation>
      </header>
      <main>{children}</main>
      <StyledFooter>
        &copy; {new Date().getFullYear()} Awesome Store, Inc.
      </StyledFooter>
    </LayoutGrid>
  );
};

export default Layout;
