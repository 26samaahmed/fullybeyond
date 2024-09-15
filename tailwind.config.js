// @type {import('tailwindcss').Config} 
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  purge: ['./src/**/*.svelte', './src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'm-plus-rounded': ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
      fontWeight: {
        'thin': 100,
        'light': 300,
        'regular': 400,
        'medium': 500,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
    },
  },
  plugins: [],
};
