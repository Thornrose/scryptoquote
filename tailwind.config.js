/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cool-cream': '#e4dfda',
        'cool-black': '#162521',
        'cool-blue': '#4f7cac',
      },
      fontFamily: {
        pangolin: ['Pangolin', 'cursive'],
      },
    },
  },
  plugins: [],
};
