import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { links } from "./links";
import { basename } from "./config";

import Login from "./public/login";
import AppRouter from "./app";

export default () => (
  <BrowserRouter basename={basename}>
    <Routes>
      <Route path={links.login.link} element={<Login />} />
      <Route path="/app/*" element={<AppRouter />} />
      <Route path={"/*"} element={<Navigate to={links.login.link} />} />
    </Routes>
  </BrowserRouter>
);
