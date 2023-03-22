/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryblue': '#0000ff',
        'textcolor': '#1e293b',
        'lightblue': '#9fc5e8',
        'lightpink': '#d87e7e',
      },
      width: {
        '80': '8rem'
      },
      animation: {
        'fade-out': 'fade .5s ease-in-out '
      },
      keyframes: {
        fade: {
          'from': {
            transform: 'scale(0)',
            opacity: 0
          },
          'to': {
            transform: 'scale(1)',
            opacity: 1
          }
        }
      }
    },
  },
  plugins: [],
}