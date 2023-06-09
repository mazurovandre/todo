/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#38c172",
        teal: "#4dc0b5",
        grey: "#9babb4",
        red: "#e3342f"
      }
    },
  },
  plugins: [],
}
