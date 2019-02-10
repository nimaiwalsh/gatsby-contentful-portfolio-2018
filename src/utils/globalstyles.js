import { css } from '@emotion/core'
import { COLOURS, MEDIAQUERY } from '../utils/theme'

//Global style and resets
const globalStyles = css`
  /*Default font set at 20px for Typography*/
  /*20/16 = 125%*/
  html {
    font-size: 125%;

    ${MEDIAQUERY.tabletPort} {
      font-size: 100%; 
    }
  }

  body {
    background-color: #F3F3F3;
    box-sizing: border-box;

    a {
      color: ${COLOURS.secondary};
    }
    
    a:hover {
      text-decoration: none;
    }
  }
`

export default globalStyles
