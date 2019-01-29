import styled, { keyframes} from 'react-emotion'
// import { CONTAINER } from '../utils/theme'

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`

export const Container = styled('div')`
  text-align: center;
  height: auto;
`
export const Button = styled('button')`
  text-align: center;
`

export const QuoteContainer = styled('section')`
  text-align: center;
  height: auto;
  height: 8rem;
  margin: 2rem 0;
`

export const BlockQuote = styled('blockquote')`
  position: relative;
  animation: ${fadeIn} 2s;
`

export const Quote = styled('p')`
`

export const Author = styled('footer')`
`

