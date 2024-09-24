/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./app.js"],
  theme: {
    // Centering container and giving it some padding by default
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      // Figtree font
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      // Adding custom colors
      colors: {
        textDark: "#0F172A",
        textLight: "#F7F9FC",
        textHighlight: "#0EA5E9",
        bgDark: "#334155",
        bgLight: "#E9EDFC",
        lightPurple: "#6366F1",
        lightBlue: "#DEF1FF",
        darkBlue: "#06B6D4",
        lightRose: "#FCDAEB",
      },
    },
  },
  plugins: [],
};
