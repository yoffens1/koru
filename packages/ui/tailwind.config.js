/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        label: {
          primary: '#FFFFFF',
          secondary: '#C7CDD3',
        },
        accent: '#C586C0',
        bg2: {
          primary: '#0B0B0E',
          stroke: '#1F2933',
          tertiary: '#1C1F24',
        }
      },
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
