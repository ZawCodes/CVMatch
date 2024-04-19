import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: [">0.2% ,not dead, not op_mini all"],
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      app: "/src/app",
      assets: "/src/assets",
      configs: "/src/configs",
      components: "/src/components",
      pages: "/src/pages",
      utils: "/src/utils",
      globalStates: "/src/globalStates",
    },
  },
});
