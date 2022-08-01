/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-alien': "url('./src/assets/fondo.png')",
      },
    },
  },
  plugins: [],
};
