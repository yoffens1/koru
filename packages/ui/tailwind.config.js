const { colors } = require('./src/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors,
      fontFamily: {
        logo: ['Quintessential_400Regular'],
        regular: ['Inter_400Regular'],
        bold: ['Inter_700Bold'],
      },
      fontSize: {
        logo: ['24px', { lineHeight: 'auto' }],
        '12': ['12px', { lineHeight: 'auto' }],
        '15': ['15px', { lineHeight: 'auto' }],
        '17': ['17px', { lineHeight: 'auto' }],
        '19': ['19px', { lineHeight: 'auto' }],
        '24': ['24px', { lineHeight: 'auto' }],
        '34': ['34px', { lineHeight: 'auto' }],
      }
    },
  },
}
