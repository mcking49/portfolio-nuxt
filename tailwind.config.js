/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      teal: {
        light: '#DEF2F1',
        default: '#3AAFA9',
        dark: '#213239',
        black: '#17252A'
      },
      grey: {
        light: '#F1F1F1',
        default: '#C5C6C7',
        dark: '#9A9A9A'
      }
    },
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      'sans': 'Roboto, sans-serif'
    },
    fontSize: {
      'xxs': '0.5rem',  // 8px
      'xs': '0.75rem',  // 12px
      'base': '1rem',   // 16px
      'lg': '1.5rem',   // 24px
      '2lg': '2rem',    // 32px
      'xl': '3rem',     // 48px
      '2xl': '4rem'     // 63px
    },
    extend: {
      inset: {
        '1/2': '50%'
      },
      screens: {
        '2xl': '1440px',
        'fhd': '1920px',
        '2k': '2560px',
        '4k': '3840px'
      }
    }
  },
  variants: {},
  plugins: []
}
