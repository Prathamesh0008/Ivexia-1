import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
  extend: {
    colors: {
      ivexia: {
        orange: "#FF7A00",
        pink: "#E2004F",
        coral: "#FF5A5A",
        dark: "#333333",
        light: "#FFF8F5",
      },
    },
    backgroundImage: {
      "gradient-ivexia": "linear-gradient(90deg, #FF7A00 0%, #E2004F 100%)",
    },
  },
},

})
