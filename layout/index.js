import React, {useState} from "../_snowpack/pkg/react.js";
import Footer from "./footer.js";
import Header from "./header/index.js";
function Layout({children}) {
  const [showBanner, setBanner] = useState(false);
  const toggleBanner = () => setBanner(!showBanner);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col h-screen justify-between"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", {
    className: "flex-grow"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto px-4 py-4"
  }, children, " ")), /* @__PURE__ */ React.createElement("div", {
    onClick: toggleBanner
  }, /* @__PURE__ */ React.createElement(Footer, null)));
}
export default Layout;
