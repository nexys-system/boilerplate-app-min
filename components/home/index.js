import React from "../../_snowpack/pkg/react.js";
import {title, github} from "../../config.js";
import {CodeIcon} from "../../_snowpack/pkg/@heroicons/react/outline.js";
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", {
  className: "text-base text-indigo-600 font-semibold tracking-wide uppercase"
}, "Title"), /* @__PURE__ */ React.createElement("p", {
  className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
}, title), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
  href: github.url
}, /* @__PURE__ */ React.createElement(CodeIcon, {
  className: "h-6 w-6 inline-block text-indigo-600",
  "aria-hidden": "true"
}))));
