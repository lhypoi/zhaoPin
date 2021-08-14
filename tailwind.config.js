module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:theme=>({
        ...theme('colors'),
        'firstBgc':'#FFF5EF',
        'secondBgc':'#34333B'
      })
    },
    
       textColor: theme => theme('colors'),
       textColor: {
         'firstTextC': '#E66717',
         'sceondTextC': '#7D7C87',
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
