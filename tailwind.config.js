/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { "Poppins": ['Poppins'] },
      colors: { 
        black: '#1e1e1e',
        white: '#F3F4E5',
      },
    },
  },
  plugins: [],
}