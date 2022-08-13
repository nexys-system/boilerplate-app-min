import React from "react";

import LoginComponent from "../../common/login";
import { linksApp } from "../../links";
import { Login, onLogin } from "../../interface/auth";

import Layout from "./layout";

const Extra = () => (
  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    Sign in to your account
  </h2>
);

const onSubmit = async (login: Login) =>
  onLogin(login)
    .then(() => {
      return { redirectUrl: linksApp.home.link };
    })
    .catch((e) => {
      return Promise.reject("could not login");
    });

export default () => (
  <Layout>
    <LoginComponent Extra={Extra} onSubmit={onSubmit} />
  </Layout>
);
