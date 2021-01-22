import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductListings from "./pages/ProductListings";
import ProductDetail from "./pages/ProductDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/product/:id" component={ProductDetail} />
      <Route
        exact
        path={["/", "/browse", "/browse/:categoryId"]}
        component={ProductListings}
      />
    </Switch>
  );
};

export default Routes;
