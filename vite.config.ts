import { defineConfig } from "vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig(({ command }) => ({
  base: "/experiment-lens/",
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: [
      "react",
      "react-dom",
      "@tanstack/react-router",
    ],
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackRouter(),
    viteReact(),
  ],
  server: { host: "::", port: 8090, strictPort: true },
}));
