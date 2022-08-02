/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './public/index.html',
    './src/**/*.{html,js,vue}'
  ],
  theme: {
    extend: {
      screens: {
       'xs': '200px'
      }
    },
  },
  plugins: [],
}
