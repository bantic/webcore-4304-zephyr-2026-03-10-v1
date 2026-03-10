import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { withZephyr } from "vite-plugin-zephyr";

const mfConfig = {
  name: "host",
  remotes: {
    remote: {
      type: "module",
      name: "remote",
      entry: "http://localhost:4001/mf-manifest.json",
    },
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
};

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  plugins: [react(), withZephyr({ mfConfig })],
  build: {
    target: "chrome89",
  },
});
