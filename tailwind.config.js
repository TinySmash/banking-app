/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '9/2': '45%',
        '124' : '496px'
      }
    },
  },
  plugins: [],
}
