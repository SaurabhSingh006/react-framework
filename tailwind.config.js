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
      }
    },
  },
  plugins: [],
}