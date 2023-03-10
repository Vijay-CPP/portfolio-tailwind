/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ["./public/index.html", "*"],
  theme: {
    extend: {
      fontFamily: {
        sacramento: ['Sacramento', 'cursive']
      }
    },
  },
  plugins: [],
}
