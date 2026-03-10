import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: "http://localhost:4001",
    port: 4001,
  },
  base: "http://localhost:4001",
  plugins: [
    react(),
    federation({
      name: "remote",
      manifest: true,
      exposes: {
        "./Counter": "./src/Counter.tsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
  build: {
    target: "chrome89",
  },
});
