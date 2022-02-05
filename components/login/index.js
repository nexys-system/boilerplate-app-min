import React from "../../_snowpack/pkg/react.js";
import Login from "../../common/login/index.js";
const Extra = () => /* @__PURE__ */ React.createElement("h2", {
  className: "mt-6 text-center text-3xl font-extrabold text-gray-900"
}, "Sign in to your account");
const onSubmit = async () => {
  console.log(1);
  await new Promise((resolve) => setTimeout(resolve, 1.5 * 1e3));
  return {redirectUrl: "/home"};
};
export default () => /* @__PURE__ */ React.createElement(Login, {
  Extra,
  onSubmit
});
