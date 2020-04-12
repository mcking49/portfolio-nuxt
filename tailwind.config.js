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
      grey: {
        light: '#F1F1F1',
        default: '#C5C6C7',
        dark: '#9A9A9A'
      },
      teal: {
        light: '#DEF2F1',
        default: '#3AAFA9',
        dark: '#213239',
        black: '#17252A'
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
      'xxs': '0.5rem',    // 8px
      'xs': '0.75rem',    // 12px
      'base': '1rem',     // 16px
      'md': '1.25rem',    // 16px
      'lg': '1.5rem',     // 24px
      'lg-2': '1.75rem',  // 24px
      '2lg': '2rem',      // 32px
      '3lg': '2.5rem',    // 40px
      'xl': '3rem',       // 48px
      '2xl': '4rem',      // 64px
      '3xl': '4.5rem'     // 72px
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1366px',
      'fhd': '1920px',
      '2k': '2560px',
      '4k': '3840px'
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem', // 4px
      '2': '0.5rem',  // 8px
      '3': '0.75rem', // 12px
      '4': '1rem',    // 16px
      '5': '1.25rem', // 20px
      '6': '1.5rem',  // 24px
      '7': '1.75rem', // 28px
      '8': '2rem',    // 32px
      '9': '2.25rem', // 36px
      '10': '2.5rem', // 40px
      '12': '3rem',   // 38px
      '16': '4rem',   // 64px
      '18': '4.5rem', // 72px
      '20': '5rem',   // 80px
      '24': '6rem',   // 96px
      '32': '8rem',   // 128px
      '40': '10rem',  // 160px
      '48': '12rem',  // 192px
      '56': '14rem',  // 224px
      '64': '16rem',  // 256px
      'inherit': 'inherit'
    },
    extend: {
      boxShadow: {
        default: '0 1px 3px 0 rgba(154, 154, 154, 1)'
      },
      inset: {
        '1/2': '50%',
        'n18': '-4.5rem'
      },
      letterSpacing: {
        '08': '0.08em'
      },
      maxHeight: {
        '32': '8rem'
      },
      maxWidth: {
        '1/2': '50%'
      }
    }
  },
  variants: {},
  plugins: []
}
