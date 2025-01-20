/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'serif'], 
        lemon: ['LEMONMILK',  'sans-serif'], 
      },
    },
    fontSize: {
      sm: '0.8rem',
      md:'0.938rem',
      base: '1.125rem', // 18px
      xl: '1.188rem', //19 px
      '2xl': '1.563rem',
      '3xl': '1.875rem', // 30px
      '4xl': '2.5rem',// 40px
      '5xl': ['4.313rem'], // 69px
      '7xl': ['8.25rem'], // 132px
      '11xl': ['18.75rem'], // 300px
    },
    fontWeight: {
      thin: '300',
      light: '400',
      bold: '900',
    },
    colors: {
      purple: '#CD00F2',
      black: '#1B1A24',
      gray: '#23222C',
      white: '#FFFFFF',
    },
    screens: {
      xs: '330px',
      sm: '768px', // => @media (min-width: 640px) { ... }
      md: '1024px', // => @media (min-width: 768px) { ... }
      lg: '1200px', // => @media (min-width: 1400px) { ... }
      xl: '1600px', // => @media (min-width: 1601px) { ... }
    },
  },
  plugins: [],
};