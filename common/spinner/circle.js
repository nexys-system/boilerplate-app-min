import React from "../../_snowpack/pkg/react.js";
export default ({radius = 20}) => {
  const classArray = [
    "mx-auto",
    "loader",
    "ease-linear",
    "rounded-full",
    "border-8",
    "border-t-8",
    "border-gray-200",
    "h-" + radius,
    "w-" + radius
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: classArray.join(" ")
  }, /* @__PURE__ */ React.createElement("style", null, `
       .loader {
        border-top-color: #3498db;
        -webkit-animation: spinner 1.5s linear infinite;
        animation: spinner 1.5s linear infinite;
      }
      
      @-webkit-keyframes spinner {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }
      
      @keyframes spinner {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
        `));
};