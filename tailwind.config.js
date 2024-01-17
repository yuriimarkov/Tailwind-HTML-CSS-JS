/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background': '#F3EFEA;',
        'button' : '#A1B29F;',
      },
      fontFamily: {
        'body': 'Open Sans',
        'second' : 'Tenor Sans',
      }
    },
  },
  plugins: [],
}

