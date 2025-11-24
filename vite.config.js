import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true,   // ✅ Fix: React Router works in dev
  },
  preview: {
    historyApiFallback: true,   // ✅ Fix: Routes work after build (npm run preview)
  }
});