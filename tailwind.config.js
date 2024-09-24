/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./app.js"],
  theme: {
    // Container
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
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
        lightPurple: "#DD9FF1",
        lightBlue: "#DEF1FF",
        darkBlue: "#06B6D4",
        lightRose: "#FCDAEB",
      },
    },
  },
  plugins: [],
};
