import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;