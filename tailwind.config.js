module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#evebff',
      'bubble-gum': '#ff77e9',
      grey: '#E8E8E8',
      greyDisabled: '#B8B8B8',
      red: '#ED5858',
      dark: '#262B31',
      black: '#000000',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
