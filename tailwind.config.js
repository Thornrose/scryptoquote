/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cool-cream': '#e4dfda',
      },
      fontFamily: {
        pangolin: ['Pangolin', 'cursive'],
      },
    },
  },
  plugins: [],
};
