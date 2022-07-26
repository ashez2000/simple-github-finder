/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#8fbcbb',
          200: '#88c0d0',
          300: '#81a1c1',
          400: '#5e81ac',
        },
        dark: {
          100: '#4c566a',
          200: '#434c5e',
          300: '#3b4252',
          400: '#2e3440',
        },
        light: {
          100: '#eceff4',
          200: '#e5e9f0',
          300: '#d8dee9',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
