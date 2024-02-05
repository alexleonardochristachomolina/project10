/** @type {import('tailwindcss').Config} */
const style=require('./src/assets/global/style.css');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#0D6EFD',
      },
      fontFamily:{
        custom:["Euclid Circular B",' Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
};
