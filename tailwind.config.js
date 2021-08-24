module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:theme=>({
        ...theme('colors'),
        'firstBgc':'#FFF5EF',
        'secondBgc':'#34333B',
        'orange':'#E66717'
      })
    },
    
       textColor: theme => theme('colors'),
       textColor: {
         'firstTextC': '#E66717',
         'orange1':'#FFAC05',
         'sceondTextC': '#7D7C87',
         'white':'#FFFFFF',
         'grey':'#7D7C87',
         'grey1':'#333333',
         'grey2':'#999999',
         'grey3':'#666666',
         'coffee':'#452607'
       },

       borderColor: theme => ({
        'orange': '#E66717',
       })
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
