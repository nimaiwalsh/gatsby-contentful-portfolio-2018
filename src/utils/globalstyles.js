import { injectGlobal } from 'react-emotion'
import { COLOURS, MEDIAQUERY } from '../utils/theme'
//Global style and resets
const globalStyles = injectGlobal`
  /*Default font set at 20px for Typography*/
  /*20/16 = 125%*/
  html {
    font-size: 125%;

    ${MEDIAQUERY.tabletLand} {
      /* 1rem = 9px, 9/16 = 56.25%
      applies when resolution < 1200px */
      font-size: 125%; 
    }

    ${MEDIAQUERY.tabletPort} {
      /*1rem = 8px, 8/16 = 50%
      applies when < 900px */
      font-size: 100%; 
    }
  }

  body {
    background-color: #F3F3F3;
    box-sizing: border-box;
  }
  a {
    color: ${COLOURS.secondary};
  }
  a:hover {
    text-decoration: none;
  }
`

export default globalStyles
