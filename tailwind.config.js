module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        sacblack: '#333333',
        sacpurple: '#9D1583',
        sacgreen: '#159D2F',
        sacbrown: '#893B00',
        sacblue: '#004E89',
      },
      colors: {
        sachomesblue: '#004E89',
      },
      fontFamily: {
        brfirma: ['brfirma'],
        brfirmabold: ['brfirmabold'],
        brfirmaregular: ['brfirmaregular'],
      },
      screens: {
        // xs: '320px',
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1440px',
        // => @media (min-width: 1536px) { ... }
      },
    },
    backgroundImage: {
      'hero-pattern': "url('/src/images/Mask Group.svg')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
