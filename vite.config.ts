import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// remote proxy
const proxyRemote = {
  "^/api/.*": {
    target: "https://tt4.nexys.io",
    changeOrigin: true,
    secure: true,
  },
};

const proxyLocal = {
  "^/api/.*": {
    target: "http://127.0.0.1:3001",
    changeOrigin: true,
    secure: false,
    rewrite: (path: string) => path.replace(/^\/api/, ""),
  },
};

// this the default/base configuration
const baseConfig = {
  plugins: [react()],
  test: {
    // ...
  },
  server: {
    port: 8080,
    proxy: proxyLocal,
  },
};

// https://vitejs.dev/config/
// conditional config: https://vitejs.dev/config/#conditional-config
export default defineConfig(({ command, mode, ssrBuild }) => {
  // if  `mode===ghpages`: we add the path prefix to match the path prefix of gh pages
  if (mode === "ghpages") {
    return { ...baseConfig, base: "/boilerplate-app-min/" };
  }

  return baseConfig;
});
