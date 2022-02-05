import React, {useState} from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import {Disclosure} from "../../_snowpack/pkg/@headlessui/react.js";
import {MenuIcon, XIcon} from "../../_snowpack/pkg/@heroicons/react/outline.js";
import {classNames} from "./utils.js";
import Right from "./right.js";
import {menus, linksApp} from "../../links.js";
const navigation = menus.map((menu) => {
  return {name: menu.name, href: menu.link, current: false};
});
export default function Example() {
  const [current, setCurrent] = useState(linksApp.home.link);
  return /* @__PURE__ */ React.createElement(Disclosure, {
    as: "nav",
    className: "bg-gray-800"
  }, ({open}) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative flex items-center justify-between h-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-y-0 left-0 flex items-center sm:hidden"
  }, /* @__PURE__ */ React.createElement(Disclosure.Button, {
    className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), open ? /* @__PURE__ */ React.createElement(XIcon, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }) : /* @__PURE__ */ React.createElement(MenuIcon, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hidden sm:block sm:ml-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-4"
  }, navigation.map((item) => /* @__PURE__ */ React.createElement(Link, {
    onClick: () => setCurrent(item.href),
    key: item.name,
    to: item.href,
    className: classNames(current === item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "px-3 py-2 rounded-md text-sm font-medium"),
    "aria-current": item.current ? "page" : void 0
  }, item.name))))), /* @__PURE__ */ React.createElement(Right, null))), /* @__PURE__ */ React.createElement(Disclosure.Panel, {
    className: "sm:hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2 pt-2 pb-3 space-y-1"
  }, navigation.map((item) => /* @__PURE__ */ React.createElement(Link, {
    key: item.name,
    to: item.href,
    className: classNames(item.current ? "bg -gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium"),
    "aria-current": item.current ? "page" : void 0
  }, item.name))))));
}
