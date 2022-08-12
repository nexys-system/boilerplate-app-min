import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

/**
 * taken from https://github.com/vitejs/vite/issues/3105#issuecomment-999473946
 * Replace env variables in index.html
 * @see https://github.com/vitejs/vite/issues/3105#issuecomment-939703781
 * @see https://vitejs.dev/guide/api-plugin.html#transformindexhtml
 */
const htmlPlugin = (env: ReturnType<typeof loadEnv>) => {
  return {
    name: "html-transform",
    transformIndexHtml: {
      enforce: "pre" as const,
      transform: (html: string): string =>
        html.replace(/\<%(.*?)%\>/g, (_match, p1) => env[p1] ?? ""), // by default replace with an empty string
    },
  };
};

// https://vitejs.dev/config/
// conditional config: https://vitejs.dev/config/#conditional-config
export default defineConfig(({ command, mode, ssrBuild }) => {
  // this the default/base configuration
  const baseConfig = {
    plugins: [react(), htmlPlugin(loadEnv(mode, "."))],
    test: {
      // ...
    },
  };

  // if  `mode===ghpages`: we add the path prefix to match the path prefix of gh pages
  if (mode === "ghpages") {
    return { ...baseConfig, base: "/boilerplate-app-min/" };
  }

  return baseConfig;
});
