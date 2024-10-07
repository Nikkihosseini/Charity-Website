/** @type {import('tailwindcss').Config} */
export const content = [
  './Public/**/*.{html,js}',
  './components/**/*.{html,js}',
];
export const theme = {
  extend: {
    colors: {
      'orange': {
        640: '#fd5800',
        650: '#ff8901',
      },
      'brown': {
        100: '#532116',
      },
      'gray': {
        250: '#f8f4f1',
      },
      'black':{
        100: 'rgba(59,55,53,0.5)',
      }
    },
    fontFamily: {
      "Poppins": "Poppins",
      "PoppinsMedium": "Poppins Medium",
      "PoppinsSemiBold": "Poppins SemiBold",
      "PoppinsBold": "Poppins Bold",
      "PoppinsBlack": "Poppins Black",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '3rem',
        '2xl': '6rem',
      },
    },
    backgroundImage: {
      "home-desktop": "url(../image/jpg-img/children-img-header.jpg)",
    },
    screens: {
      'xs': '350px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
};
export const plugins = [
  function ({ addVariant }) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
  }
];


