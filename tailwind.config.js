/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans']
      },
      colors: {
        'primary': '#01959F',
        'primary-surface': '#F7FEFF',
        'success': '#43936C',
        'success-border': '#B8DBCA',
        'success-surface': '#F8FBF9',
        'danger': '#E11428',
        'danger-border': '#F5B1B7',
        'danger-surface': '#FFFAFA',
        'secondary': '#FA9810',
        'secondary-border': '#FEEABC',
        'secondary-surface': '#FFFCF5'
      }
    },
  },
  plugins: [],
}
