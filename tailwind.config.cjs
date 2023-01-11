/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter, sans-serif'],
      },
      colors: {
        sky: {
          450: '#84b4d1',
          550: '#78A4BF'
        },
        amber: {
          550: '#D9AE73'
        }
      },
    },
  plugins: [],
}
}