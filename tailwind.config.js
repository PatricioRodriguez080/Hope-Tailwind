/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marron: {
          100: "#A37666",
          200: "#795548",
          300: "#66483D"
        }
      }
    },
  },
  plugins: [],
}