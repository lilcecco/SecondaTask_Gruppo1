/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#222221',
        'secondary': '#00A09A',

        'textBoxGrey': '#323232',
       'brown' : '#222221',
        'green': '#00A09A',
        'gray': '#ABB2BF'
      }
    },
  },
  plugins: [],
}

