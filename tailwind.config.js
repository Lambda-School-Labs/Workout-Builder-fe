module.exports = {
  theme: {
    extend: {
      screens: {
        xs: '300px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        uxblue: '#1243C0',
        uxline: '#636363',
        uxblack: '#2B2B2B',
        uxlightgrey: '#C4C4C4',
        uxgoogle: '#646770',
        uxdarkgrey: '#525466',
        uxorange: '#EC930F',
        uxorangetext: '#FD6A02',
        uxicon: '#666666'
      }
    },
    fontFamily: {
      display: ['Exo', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
      h1: ['Patrick Hand', 'cursive']
    },
    lineHeight: {
      middle: "0.1em"
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: []
};