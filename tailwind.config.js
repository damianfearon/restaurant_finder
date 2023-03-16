/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'dark-grey': '#393939',
        tan: '#fceed1',
        blondey: '#c2b490',
        'Light-Classy-Grey': '#f1f0ee',
        'Deep-Orange': '#FF5A09',
        clean: '#DFDCE3',
        mint: '#4cb69f',
      },
    },
  },
  plugins: [],
};
