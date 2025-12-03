/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Add this line!
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}