/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown' : '#222221',
        'secondary-brown': '#1E1E1E',
        'green': '#00A09A',
        'gray': '#ABB2BF',
        'secondary-gray': '#323232'
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'fira-code': ['Fira Code', 'monospace'],
    }
  },
  plugins: [],
}

