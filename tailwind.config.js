module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
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
