import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      "89r5vg-5173.csb.app", // Add the problematic host
    ],
  },
  plugins: [react()],
});
