import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { withZephyr } from "vite-plugin-zephyr";

const mfConfig = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Counter": "./src/Counter.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
};

// https://vite.dev/config/
export default defineConfig({
  server: {
    // origin: "http://localhost:4001",
    port: 4001,
  },
  // base: "http://localhost:4001",
  plugins: [react(), withZephyr({ mfConfig })],
  build: {
    target: "chrome89",
  },
});
