/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.hbs', './assets/scripts/**/*.svelte'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
