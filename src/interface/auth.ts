import * as Credentials from "@nexys/headless/dist/auth/credentials";
import * as Logout from "@nexys/headless/dist/auth/logout";
import { withBackend } from "../config";

export interface Login {
  email: string;
  password: string;
}

export interface AuthResponse {
  locale: string;
  permissions: string[];
  profile: {
    id: string;
    uuid?: string;
    firstName: string;
    lastName: string;
    email: string;
    instance: { uuid: string; name: string };
  };
}

export const onLogin = async (login: Login): Promise<AuthResponse> => {
  if (withBackend) {
    const body = JSON.stringify({
      ...login,
      // instance: { uuid: "592e4377-1a51-11ed-8bb0-a651e386dded" },
    });

    try {
      const r = await fetch("/api/auth/login", {
        method: "POST",
        body,
        headers: { "content-type": "application/json" },
      });

      const authResponse: AuthResponse = await r.json();

      if (r.status != 200) {
        return Promise.reject(authResponse);
      }

      Credentials.set(
        authResponse.profile,
        authResponse.permissions,
        authResponse.locale
      );

      return authResponse;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 1 * 1000)); // wait a bit
  const authResponse = {
    profile: {
      firstName: "John",
      lastName: "Doe",
      email: "john@doe.com",
      instance: { uuid: "1", name: "main" },
      id: "234",
      uuid: "sdf",
    },
    locale: "en-US",
    permissions: ["app"],
  };

  Credentials.set(
    authResponse.profile,
    authResponse.permissions,
    authResponse.locale
  );

  return authResponse;
};

export const logout = () => {
  Logout.user("/api/auth/logout");
};
