import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@icon": path.resolve(__dirname, "src/assets/icons"),
      "@components": path.resolve(__dirname, "src/🌍_components"),
      "@features": path.resolve(__dirname, "src/features"),
    },
  },
  plugins: [react(), svgr(), tailwindcss()],
});
