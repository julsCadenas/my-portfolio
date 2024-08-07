/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: { "Poppins": ['Poppins'] },
      colors: { 
        black: '#1e1e1e',
        white: '#F3F4E5',
      },
      screens: {
        'cmd' : '1110px',
        'skills' : '1260px',
      },
    },
  },
  plugins: [],
}