import { withBackend } from "../config";

export interface Profile {
  firstName: string;
  lastName: string;
  email: string;
}

export const getProfile = async (): Promise<Profile> => {
  if (!withBackend) {
    return { firstName: "John", lastName: "Doe", email: "john@doe.com" };
  }

  const r = await fetch("/api/profile");
  return r.json();
};
