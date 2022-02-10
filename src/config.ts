export const version =
  import.meta.env.SNOWPACK_PUBLIC_VERSION || "unset_version";
export const sha = import.meta.env.SNOWPACK_PUBLIC_GIT_SHA || "unset_sha";
export const title = import.meta.env.SNOWPACK_PUBLIC_TITLE || "Boilerplate";
export const basename = import.meta.env.SNOWPACK_PUBLIC_URL;

const ghUrl = "https://github.com/nexys-system/boilerplate-app-min";

export const github = { sha: `${ghUrl}/commit/${sha}`, url: ghUrl };

export const withBackend: boolean =
  import.meta.env.SNOWPACK_PUBLIC_WITH_BACKEND === "true" || false;
