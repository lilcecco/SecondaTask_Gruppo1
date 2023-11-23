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
      }
    },
  },
  plugins: [],
}

