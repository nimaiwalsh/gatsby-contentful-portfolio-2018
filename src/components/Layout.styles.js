import styled from 'react-emotion'
import { CONTAINER } from '../utils/theme'

export const LayoutWrapper = styled('div')`
  position: relative;
`

export const ContentWrapper = styled('main')`
  margin: 0 auto;
  height: 100%;
  min-height: 50rem;
  max-width: ${CONTAINER.WIDTH};
  padding: 0 1rem;
`
