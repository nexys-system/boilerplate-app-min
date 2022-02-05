import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./components/home";

import Layout from "./layout";

import Login from "./components/login";

import { basename } from "./config";

import { links, linksApp } from "./links";

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

const AppRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={linksApp.home.link} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default () => (
  <BrowserRouter basename={basename}>
    <Switch>
      <Route exact path={links.login.link} component={Login} />
      <Route path="/app" component={AppRouter} />
      <Route component={() => <Redirect to={links.login.link} />} />
    </Switch>
  </BrowserRouter>
);
