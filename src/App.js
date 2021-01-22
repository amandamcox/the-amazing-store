import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Routes from "./Routes";
import { theme, GlobalStyle } from "./styles";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes />
        </Router>
      </SCThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
