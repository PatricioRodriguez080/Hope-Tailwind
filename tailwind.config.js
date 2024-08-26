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
        },
        'black-opacity-custom': 'rgba(0, 0, 0, 0.491)'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(121,85,72,1) 0%, rgba(163,118,102,1) 25%, rgba(186,152,140,1) 50%, rgba(209,187,179,1) 75%, rgba(232,221,217,1) 100%)',
      },
    },
  },
  plugins: [],
}