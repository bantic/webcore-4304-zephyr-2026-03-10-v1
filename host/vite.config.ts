import { defineConfig } from 'vite'
import { withZephyr } from "vite-plugin-zephyr";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), withZephyr()],
})
