import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'
sutroTheme.baseFontSize = '20px'
sutroTheme.googleFonts = [
  {
    name: 'Open Sans',
    styles: ['300', '400', '600', '700'],
  },
  {
    name: 'Merriweather',
    styles: ['400', '400i', '700', '700i'],
  },
]

// sutroTheme.overrideThemeStyles = options => ({
//   //styles in here
// })

// const typography = new Typography({ baseFontSize: "20px" });
const typography = new Typography(sutroTheme)

export default typography
