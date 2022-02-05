import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import {Fragment} from "../../_snowpack/pkg/react.js";
import {Menu, Transition} from "../../_snowpack/pkg/@headlessui/react.js";
import {UserCircleIcon} from "../../_snowpack/pkg/@heroicons/react/outline.js";
import {classNames} from "./utils.js";
import links from "../../links.js";
export default () => /* @__PURE__ */ React.createElement("div", {
  className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
}, /* @__PURE__ */ React.createElement(Menu, {
  as: "div",
  className: "ml-3 relative"
}, ({open}) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Menu.Button, {
  className: "bg-gray-800 flex text-gray-400 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
}, /* @__PURE__ */ React.createElement("span", {
  className: "sr-only"
}, "Open user menu"), /* @__PURE__ */ React.createElement(UserCircleIcon, {
  className: "h-6 w-6",
  "aria-hidden": "true"
}))), /* @__PURE__ */ React.createElement(Transition, {
  show: open,
  as: Fragment,
  enter: "transition ease-out duration-100",
  enterFrom: "transform opacity-0 scale-95",
  enterTo: "transform opacity-100 scale-100",
  leave: "transition ease-in duration-75",
  leaveFrom: "transform opacity-100 scale-100",
  leaveTo: "transform opacity-0 scale-95"
}, /* @__PURE__ */ React.createElement(Menu.Items, {
  static: true,
  className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
}, /* @__PURE__ */ React.createElement(Menu.Item, null, ({active}) => /* @__PURE__ */ React.createElement("a", {
  href: "#",
  className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")
}, "Your Profile")), /* @__PURE__ */ React.createElement(Menu.Item, null, ({active}) => /* @__PURE__ */ React.createElement("a", {
  href: "#",
  className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")
}, "Settings")), /* @__PURE__ */ React.createElement(Menu.Item, null, ({active}) => /* @__PURE__ */ React.createElement(Link, {
  to: links.login.link,
  className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")
}, "Sign out")))))));
