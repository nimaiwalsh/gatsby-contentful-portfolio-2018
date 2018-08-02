import { injectGlobal } from 'react-emotion';
import { COLOURS } from '../utils/theme';
//Global style and resets
const globalStyles = injectGlobal`
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
  ul, ol {
    margin-left: 1.78rem;
  }
`

export default globalStyles