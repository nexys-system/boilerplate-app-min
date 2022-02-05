import React, {useState} from "../../_snowpack/pkg/react.js";
import {Redirect} from "../../_snowpack/pkg/react-router-dom.js";
import {LockClosedIcon} from "../../_snowpack/pkg/@heroicons/react/solid.js";
import * as V from "../../_snowpack/pkg/@nexys/validation.js";
import Spinner from "../spinner/circle.js";
const loginShape = {
  email: {extraCheck: V.Utils.emailCheck},
  password: {extraCheck: V.Utils.passwordCheck}
};
const classInputGeneric = "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm";
export default ({
  onSubmit,
  Extra
}) => {
  const [login, setLogin] = useState({
    email: void 0,
    password: void 0
  });
  const [errors, setErrors] = useState();
  const [isLoading, setLoading] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState();
  const handleChange = (v, key) => {
    const value = v.target.value;
    setLogin({...login, [key]: value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors2 = V.Main.checkObject(login, loginShape);
    if (Object.values(errors2).length > 0) {
      const errOut = Object.values(errors2).reduce((a, b) => a.concat(b));
      setErrors(errOut);
      return;
    }
    setLoading(true);
    onSubmit(login).then((x) => {
      setRedirectUrl(x.redirectUrl);
    });
    return;
  };
  if (redirectUrl) {
    return /* @__PURE__ */ React.createElement(Redirect, {
      to: redirectUrl
    });
  }
  const classInput = errors ? classInputGeneric.replace(/border-\w+-\d+/, "border-red-400").replace(/focus:border-\w+-\d+/, "") : classInputGeneric;
  return /* @__PURE__ */ React.createElement("div", {
    className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-md w-full space-y-8"
  }, Extra && /* @__PURE__ */ React.createElement(Extra, null), !isLoading && /* @__PURE__ */ React.createElement("form", {
    className: "mt-8 space-y-6",
    onSubmit: handleSubmit,
    method: "POST"
  }, errors && /* @__PURE__ */ React.createElement("div", {
    className: "p-2 flex items-center justify-between bg-red-200 rounded text-gray-600"
  }, /* @__PURE__ */ React.createElement("ul", null, errors.map((error, i) => /* @__PURE__ */ React.createElement("li", {
    key: i
  }, error)))), /* @__PURE__ */ React.createElement("div", {
    className: "rounded-md shadow-sm -space-y-px"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email-address",
    className: "sr-only"
  }, "Email address"), /* @__PURE__ */ React.createElement("input", {
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    required: true,
    className: classInput,
    placeholder: "Email address",
    value: login.email || "",
    onChange: (v) => handleChange(v, "email")
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password",
    className: "sr-only"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    required: true,
    className: classInput.replace("-t-", "-b-"),
    placeholder: "Password",
    onChange: (v) => handleChange(v, "password"),
    value: login.password || ""
  }))), /* @__PURE__ */ React.createElement(SignInBtn, null)), isLoading && /* @__PURE__ */ React.createElement(Spinner, null)));
};
const SignInBtn = () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
  type: "submit",
  className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
}, /* @__PURE__ */ React.createElement("span", {
  className: "absolute left-0 inset-y-0 flex items-center pl-3"
}, /* @__PURE__ */ React.createElement(LockClosedIcon, {
  className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
  "aria-hidden": "true"
})), "Sign in"));
