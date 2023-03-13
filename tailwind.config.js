/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryblue': '#0000ff',
        'textcolor': '#1e293b'
      }
    },
  },
  plugins: [],
}