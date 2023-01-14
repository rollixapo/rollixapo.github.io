/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'oswald': ['"Oswald"', 'sans-serif'],
      'slab': ['"Roboto Slab"', 'serif'],
    },
  },
  plugins: [],
}
