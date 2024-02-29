/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.vue'
    ],
    darkMode: 'class',
    theme: {
      extend: {
        boxShadow: {
          inner: 'inset 1px 1px 3px 0 #0008',
          DEFAULT: '1px 1px 3px 0 #000a',
          md: '2px 2px 6px 1px #000a'
        },
      },
    },
    plugins: [],
  }