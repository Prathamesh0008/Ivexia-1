// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
  sans: ["Inter", "sans-serif"],
  heading: ["Poppins", "sans-serif"],
},

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
  plugins: [],
};
