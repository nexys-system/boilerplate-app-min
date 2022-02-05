import React from "react";

import Login from "../../common/login";

const Extra = () => (
  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    Sign in to your account
  </h2>
);

const onSubmit = async () => {
  console.log(1);
  await new Promise((resolve) => setTimeout(resolve, 1.5 * 1000)); // wait a bit
  return { redirectUrl: "/home" };
};

export default () => <Login Extra={Extra} onSubmit={onSubmit} />;
