/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html', './src/**/*.{html,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Exo 2"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require('@headlessui/tailwindcss')]
}
