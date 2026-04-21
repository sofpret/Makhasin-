/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body:    ["Inter", "sans-serif"],
      },
      colors: {
        red: {
          brand: "#dc1414",
          dim:   "rgba(220,20,20,0.1)",
          glow:  "rgba(220,20,20,0.22)",
        },
        dark: {
          base:    "#080808",
          surface: "#111111",
          border:  "rgba(255,255,255,0.07)",
        },
      },
    },
  },
  plugins: [],
};
