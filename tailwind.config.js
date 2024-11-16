/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
      'primary': '#691b20',
      'button': '#e33c4b',
      'body-text-color': '#1a1a1a',

    },
    animation: {
      bounce: 'bounce 2s ease-in-out',
    },
    keyframes: {
      bounce: {
        '0%, 20%, 50%, 80%, 100%': {
          transform: 'translateY(0)',
        },
        '40%': {
          transform: 'translateY(-30px)',
        },
        '60%': {
          transform: 'translateY(-15px)',
        },
      },
    },

  fontFamily: {
    'heading':  ['Helvetica', 'Arial', 'sans-serif']

  }},
  },
  plugins: [],
}