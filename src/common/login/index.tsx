import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/solid";
import * as V from "@nexys/validation";
import Spinner from "../spinner/circle";
import { Login } from "../../interface/auth";

const loginShape: V.Type.Shape = {
  email: { extraCheck: V.Utils.emailCheck },
  password: { extraCheck: V.Utils.passwordCheck },
};

const classInputGeneric =
  "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm";

export default ({
  onSubmit,
  Extra,
}: {
  onSubmit: (login: Login) => Promise<{ redirectUrl: string }>; // returns redirect url
  Extra?: () => JSX.Element;
}) => {
  const [login, setLogin] = useState<Partial<Login>>({
    email: undefined,
    password: undefined,
  });
  const [errors, setErrors] = useState<V.Type.ErrorOut | undefined>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [redirectUrl, setRedirectUrl] = useState<string | undefined>();

  const handleChange = (v: any, key: keyof Login) => {
    const value = v.target.value;
    setLogin({ ...login, [key]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const errors = V.Main.checkObject(login, loginShape);

    if (Object.values(errors).length > 0) {
      const errOut = Object.values(errors as any[]).reduce((a, b) =>
        a.concat(b)
      );

      setErrors(errOut);
      return;
    }

    setLoading(true);
    onSubmit(login as Login)
      .then((x) => {
        setRedirectUrl(x.redirectUrl);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  if (redirectUrl) {
    return <Navigate to={redirectUrl} />;
  }

  const classInput = errors
    ? classInputGeneric
        .replace(/border-\w+-\d+/, "border-red-400")
        .replace(/focus:border-\w+-\d+/, "")
    : classInputGeneric;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {Extra && <Extra />}
        {!isLoading && (
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit}
            method="POST"
          >
            {errors && (
              <div className="p-2 flex items-center justify-between bg-red-200 rounded text-gray-600">
                <ul>
                  {errors.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={classInput}
                  placeholder="Email address"
                  value={login.email || ""}
                  onChange={(v) => handleChange(v, "email")}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={classInput.replace("-t-", "-b-")}
                  placeholder="Password"
                  onChange={(v) => handleChange(v, "password")}
                  value={login.password || ""}
                />
              </div>
            </div>

            <SignInBtn />
          </form>
        )}

        {isLoading && <Spinner />}
      </div>
    </div>
  );
};

const SignInBtn = () => (
  <div>
    <button
      type="submit"
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
        <LockClosedIcon
          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
          aria-hidden="true"
        />
      </span>
      Sign in
    </button>
  </div>
);
