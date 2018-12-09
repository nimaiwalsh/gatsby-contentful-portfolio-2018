import { injectGlobal } from 'react-emotion'
import { COLOURS } from '../utils/theme'
//Global style and resets
const globalStyles = injectGlobal`
  /*Default font set at 20px for Typography*/
  /*20/16 = 125%*/
  html {
    font-size: 125%;
  }
  body {
    background-color: #F3F3F3;
    box-sizing: border-box;
    font-size: 20px;
  }
  a {
    color: ${COLOURS.secondary};
  }
  a:hover {
    text-decoration: none;
  }
  ul, ol {
    margin-left: 1.78rem;
  }
`

export default globalStyles
