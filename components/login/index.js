import React from "../../_snowpack/pkg/react.js";
import LoginComponent from "../../common/login/index.js";
import {version, withBackend} from "../../config.js";
import {linksApp} from "../../links.js";
const Extra = () => /* @__PURE__ */ React.createElement("h2", {
  className: "mt-6 text-center text-3xl font-extrabold text-gray-900"
}, "Sign in to your account");
const onSubmit = async (login) => {
  if (withBackend) {
    const body = JSON.stringify(login);
    const r = await fetch("/api/login", {
      method: "POST",
      body,
      headers: {"content-type": "application/json"}
    });
    console.log(r);
    return {redirectUrl: linksApp.home.link};
  }
  console.log(1);
  await new Promise((resolve) => setTimeout(resolve, 1.5 * 1e3));
  return {redirectUrl: linksApp.home.link};
};
export default () => /* @__PURE__ */ React.createElement("div", {
  className: "flex flex-col h-screen justify-between"
}, /* @__PURE__ */ React.createElement("main", {
  className: "mb-auto h-10 bg-green-500"
}, /* @__PURE__ */ React.createElement(LoginComponent, {
  Extra,
  onSubmit
})), /* @__PURE__ */ React.createElement("footer", {
  className: "h-8 p-1"
}, version));
