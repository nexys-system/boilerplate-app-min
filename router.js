import React from "./_snowpack/pkg/react.js";
import {Route, Switch, BrowserRouter as Router} from "./_snowpack/pkg/react-router-dom.js";
import Home from "./components/home/index.js";
import Layout from "./layout/index.js";
import Login from "./components/login/index.js";
import {basename} from "./config.js";
import {links, linksApp} from "./links.js";
const NotFound = () => /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "Page Not Found"));
const AppRouter = () => {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: linksApp.home.link,
    component: Home
  }), /* @__PURE__ */ React.createElement(Route, {
    component: NotFound
  })));
};
export default () => /* @__PURE__ */ React.createElement(Router, {
  basename
}, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: links.login.link,
  component: Login
}), /* @__PURE__ */ React.createElement(AppRouter, null)));
