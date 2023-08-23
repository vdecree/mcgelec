const tailwindCSSVariables = require('@bly-th/tailwind-css-variables');
const tailwindCustomUtilities = require('@bly-th/tailwind-custom-utilities');

module.exports = {
  content: ["./src/**/*.njk"],
  corePlugins: {
    preflight: false,
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
  theme: {
    colors: {
      primary: '#916A3D',
      secondary: '#5C6D70',
      light: '#ffffff',
      dark: '#171B1C',
      winterSlate: '#E1E6E6',
      lightGold: '#B79554',
      slate: '#77878A',
      lightSlate: '#a6bcc0',
    },
    borderRadius: {
      small: '3px',
      medium: '6px',
    },
    fontSize: {
      0: 0,
      50: 'clamp(0.46rem, calc(0.79rem + -0.43vw), 0.70rem)',
      100: 'clamp(0.58rem, calc(0.87rem + -0.38vw), 0.79rem)',
      200: 'clamp(0.72rem, calc(0.95rem + -0.30vw), 0.89rem)',
      300: 'clamp(0.90rem, calc(1.04rem + -0.18vw), 1.00rem)',
      400: 'clamp(1.13rem, calc(1.13rem + 0.00vw), 1.13rem)',
      500: 'clamp(1.27rem, calc(1.22rem + 0.25vw), 1.41rem)',
      600: 'clamp(1.42rem, calc(1.31rem + 0.59vw), 1.76rem)',
      700: 'clamp(1.60rem, calc(1.39rem + 1.05vw), 2.20rem)',
      800: 'clamp(1.80rem, calc(1.47rem + 1.67vw), 2.75rem)',
      900: 'clamp(2.03rem, calc(1.53rem + 2.49vw), 3.43rem)',
      1000: 'clamp(2.28rem, calc(1.57rem + 3.56vw), 4.29rem)',
      1100: 'clamp(2.57rem, calc(1.57rem + 4.95vw), 5.36rem)',
      1200: 'clamp(2.89rem, calc(1.53rem + 6.76vw), 6.71rem)',
      1300: 'clamp(3.25rem, calc(1.43rem + 9.09vw), 8.38rem)',
    },
    fontFamily: {
      serif: ['Sentient-Variable', 'serif'],
      sans: ['Schibsted Grotesk', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    spacing: {
      // https://utopia.fyi/space/calculator/?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l
      0: 0,
      200: 'clamp(0.31rem, calc(0.14rem + 0.85vw), 0.75rem)',
      300: 'clamp(0.69rem, calc(0.52rem + 0.85vw), 1.13rem)',
      400: 'clamp(1.00rem, calc(0.80rem + 0.98vw), 1.50rem)',
      500: 'clamp(1.31rem, calc(0.95rem + 1.83vw), 2.25rem)',
      600: 'clamp(2.00rem, calc(1.61rem + 1.95vw), 3.00rem)',
      700: 'clamp(2.63rem, calc(1.89rem + 3.66vw), 4.50rem)',
      800: 'clamp(3.94rem, calc(3.13rem + 4.02vw), 6.00rem)',
      900: 'clamp(5.25rem, calc(3.79rem + 7.32vw), 9.00rem)',
      1000: 'clamp(7.88rem, calc(6.85rem + 5.12vw), 10.50rem)',
      1100: 'clamp(9.19rem, calc(8.09rem + 5.49vw), 12.00rem)',
      1200: 'clamp(10.50rem, calc(9.33rem + 5.85vw), 13.50rem)',
      1300: 'clamp(11.81rem, calc(10.57rem + 6.22vw), 15.00rem)',
    }
  },
  plugins: [
    // Generates custom property values from tailwind config
    tailwindCSSVariables({
      colors: 'color',
      spacing: 'size',
      fontSize: 'text',
      fontFamily: 'font',
      fontWeight: 'font',
      lineHeight: 'leading',
      borderRadius: 'radius',
    }),
    tailwindCustomUtilities({
      spacing: {
        name: 'flow-space',
        property: '--flow-space',
      },
    })
  ]
};