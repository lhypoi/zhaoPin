module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:theme=>({
        ...theme('colors'),
        'firstBgc':'#FFF5EF'
      })
    },
    
       textColor: theme => theme('colors'),
       textColor: {
         'firstTextC': '#E66717',
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
