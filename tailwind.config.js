/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    minWidth: {
      '72': '18rem'
    },
    extend: {
      spacing: {
        '9/2': '45%',
        '124' : '496px',
        'tenth' : '10%',
      }
    },
  },
  plugins: [],
}
