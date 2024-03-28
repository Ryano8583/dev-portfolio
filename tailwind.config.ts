/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.vue'
    ],
    darkMode: 'class',
    theme: {
      extend: {
        animation: {
          rotateDown: 'rotateDown 0.4s ease-in-out forwards',
          rotateUp: 'rotateUp 0.4s ease-in-out forwards',
        },
        boxShadow: {
          inner: 'inset 1px 1px 3px 0 #0008',
          DEFAULT: '1px 1px 3px 0 #000a',
          md: '2px 2px 6px 1px #000a',
          full: ' 0 0 6px 0 #000a',
          card: '0 4px 8px 0 #000a',
          'card-hover': '0 4px 12x 0 #000a',
          'card-dark': '0 4px 8px 0 #cbd5e1',
          'card-dark-hover': '0 4px 12px 0 #cbd5e1'
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
        keyframes: {
          rotateDown: {
            '0%': { transform: 'rotate(180deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          rotateUp: {
            '0%': { transform: 'rotate(0)' },
            '100%': { transform: 'rotate(180deg)' },
          },
        },
        transitionDuration: {
          '400': '400ms',
        },
        transitionProperty: {
          fade: 'opacity, visibility, background-color, color, transform'
        }
      },
    },
    plugins: [],
  }