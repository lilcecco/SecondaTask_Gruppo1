/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown' : '#222221',
        'green': '#00A09A',
        'gray': '#ABB2BF'
      }
    },
  },
  plugins: [],
}

