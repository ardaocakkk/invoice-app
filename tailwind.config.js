/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        extend: {
          '01': '#7C5DFA',
          '02': '#9277FF',
          '03': '#1E2139',
          '04': '#252945',
          '05': '#DFE3FA',
          '06': '#888EB0',
          '07': '#7E88C3',
          '08': '#0C0E16',
          '09': '#EC5757',
          '10': '#ff9797',
          '11': '#F8F8FB',
          '12': '#141625',
          'paid' : '#33D69F',
          'pending' : '#FF8F00'
        }
    },


    }
  },
  plugins: [],
}

