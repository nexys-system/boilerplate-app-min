export interface Profile {
  firstName: string;
  lastName: string;
  email: string;
}

export const getProfile = async (): Promise<Profile> => {
  const r = await fetch("/api/profile");
  return r.json();
};
