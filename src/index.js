import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/css/mycss.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Home from "views/Home.js";
import Kdkd from "views/Kdkd.js";
import Sgpg from "views/Sgpg.js";
import Football from "views/Football.js";
import Sample from "views/Sample.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Home {...props} />} />
      <Route
        path="/kdkd"
        exact
        render={props => <Kdkd {...props} />}
      />
      <Route
        path="/sgpg"
        exact
        render={props => <Sgpg {...props} />}
      />
      <Route
        path="/football"
        exact
        render={props => <Football {...props} />}
      />
      <Route
        path="/home"
        exact
        render={props => <Home {...props} />}
      />
      <Route
        path="/sample"
        exact
        render={props => <Sample {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
