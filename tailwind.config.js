/** @type {import('tailwindcss').Config} */
export const content = [
  './Public/**/*.{html,js}',
  './components/**/*.{html,js}',
];
export const theme = {
  extend: {
    colors: {
      'orange': {
        150: '#f6cc76',
        250: '#FFECB3',
        260: '#FFB74D',
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
        xxs: '1rem',
        'xs': '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '6rem',
      },
    },
    screens: {
      'xxs': '320px',
      'xs': '480px',
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


