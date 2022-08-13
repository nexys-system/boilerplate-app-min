import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./home";
import Profile from "./profile";
import NotFound from "./not-found";

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/:any"} element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
