/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '--mainBrown' : '#222221',
        '--mainGreen': '#00A09A',
        '--mainGray': '#ABB2BF'
      }
    },
  },
  plugins: [],
}

