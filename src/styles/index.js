import { createGlobalStyle } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#f8cb00" },
    secondary: { main: "#6364d8" },
    background: "#FFFFFF",
    fonts: {
      titles: "#000000",
      productNames: "#373738",
      body: "#585858",
      categories: "rgba(123,123,123,0.78)",
      logo: "#FFFFFF",
    },
    cards: {
      border: "#e4e4e4",
      hoverBorder: "#f8cb00",
    },
  },
});

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => `
	html, body {
		padding: 0;
		margin: 0;
		-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 16px;
		font-weight: 400;
		color: ${theme.palette.fonts.body};
		background-color: ${theme.palette.background};
	}
	h1, h2, h3, h4 {
		font-weight: 400;
		font-size: 28px;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	`}
`;

export { theme, GlobalStyle };
