module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'firstBgc': '#FFF5EF',
        'secondBgc': '#34333B',
        'orange': '#E66717'
      },
      borderColor: {
        'orange': '#E66717'
      },
      textColor: {
        'firstTextC': '#E66717',
        'orange1': '#FFAC05',
        'orange': '#E66717',
        'sceondTextC': '#7D7C87',
        'white': '#FFFFFF',
        'grey': '#7D7C87',
        'grey1': '#333333',
        'grey2': '#999999',
        'grey3': '#666666',
        'coffee': '#452607'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['first'],
      borderColor: ['first'],
      margin: ['last'],
      padding: ['even', 'odd'],
      width: ['even', 'odd']
    }
  },
  plugins: []
}
