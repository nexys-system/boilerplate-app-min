export const title = "Boilerplate";
const ghUrl = "https://github.com/nexys-system/boilerplate-app-min";

export const withBackend: boolean =
  import.meta.env.VITE_WITH_BACKEND === "true" || false;

export const version: string = import.meta.env.VITE_VERSION || "unset_version";
export const sha: string = import.meta.env.VITE_GIT_SHA || "unset_sha";
export const basename = import.meta.env.BASE_URL;

export const github = {
  sha: `${ghUrl}/commit/${sha}`,
  version: `${ghUrl}/releases/tag/${version}`,
  url: ghUrl,
};
