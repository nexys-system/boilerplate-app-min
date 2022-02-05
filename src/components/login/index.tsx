import React from "react";

import LoginComponent, { Login } from "../../common/login";
import { version, withBackend } from "../../config";
import { linksApp } from "../../links";

const Extra = () => (
  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    Sign in to your account
  </h2>
);

const onSubmit = async (login: Login) => {
  if (withBackend) {
    const body = JSON.stringify(login);
    const r = await fetch("/api/login", {
      method: "POST",
      body,
      headers: { "content-type": "application/json" },
    });

    console.log(r);

    return { redirectUrl: linksApp.home.link };
  }

  console.log(1);
  await new Promise((resolve) => setTimeout(resolve, 1.5 * 1000)); // wait a bit
  return { redirectUrl: linksApp.home.link };
};

export default () => (
  <div className="flex flex-col h-screen justify-between">
    <main className="mb-auto h-10 bg-green-500">
      <LoginComponent Extra={Extra} onSubmit={onSubmit} />
    </main>
    <footer className="h-8 p-1">{version}</footer>
  </div>
);
