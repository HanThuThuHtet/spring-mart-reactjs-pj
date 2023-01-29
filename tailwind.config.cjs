/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': 'Roboto'
      },
      colors: {
        "primary" : "#fffffe",
        "secondary" : "#f25f4c",
        // "secondary" : "#ed7a6b",
        "danger" : "#e53170",
        "header" : "#0f0e17",
        "info" : "#f98800",
        "gray1" : "#d1d1e9"
      }
    },
  },
  plugins: [],
}
