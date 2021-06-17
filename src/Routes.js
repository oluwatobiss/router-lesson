import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

function Routes() {
  return (
    <BrowserRouter basename="/router-lesson">
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;