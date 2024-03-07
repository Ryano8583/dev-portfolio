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
          md: '2px 2px 6px 1px #000a',
          full: ' 0 0 6px 0 #000a'
        },
        colors: {
          blue: {
            999: '#0F204D'
          },
          green: {
            999: '#0F3E22'
          },
          orange: {
            999: '#652610'
          },
          pink: {
            999: '#570F2C'
          },
          purple: {
            999: '#300E48'
          }
        },
        transitionProperty: {
          fade: 'opacity, visibility, background-color, color, transform'
        }
      },
    },
    plugins: [],
  }