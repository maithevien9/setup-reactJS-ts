import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header/index";
import Home from "../pages/Home/index";
import Organization from "../pages/Organizations/index";

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/organizations" component={Organization} />
      </Switch>
    </Router>
  );
};

export default Routes;
