/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        'gray-light': '#D8D9DD',
        'purple' : '#4F359B',
        'black' : '#26303E',
        'test': '#5C6672'
      },
      backgroundColor:{
        'gray-light': '#D8D9DD',
        'purple' : '#4F359B',
      },
    },
  },
  plugins: [],
}

