import styled from 'react-emotion'
import { COLOURS } from '../../utils/theme'

export const ArticleContainer = styled('article')`
  .title-wrapper {
    background-color: ${COLOURS.black};
    transform: skewX(-10deg);
    margin-top: 3.56rem;
    margin-bottom: 1.78rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    padding: .4rem;
    margin: 0;
    letter-spacing: -0.09rem;
    transform: skewX(10deg);
  }

  .title a {
    /* color: ${COLOURS.secondaryHighlight}; */
    color: ${COLOURS.primary};
  }

  .title a:hover {
    color: ${COLOURS.secondaryHighlight};
  }

  .date {
    padding-right: 2rem;
    font-family: 'Open Sans';
    color: #FFF;
  }
`

export default ArticleContainer
