import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/css/mycss.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Home from "views/Home.js";
import Home_save from "views/Home save.js";
import Kdkd from "views/Kdkd.js";
import Sgpg from "views/Sgpg.js";
import Football from "views/Football.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Home {...props} />} />
      <Route path="/index" exact render={props => <Index {...props} />} />
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
        render={props => <Home_save {...props} />}
      />
      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login-page" exact render={props => <Login {...props} />} />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
