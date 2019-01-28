import styled from 'react-emotion'
import { CONTAINER, COLOURS } from '../../utils/theme'

export const HeaderWrapper = styled('div')`
  height: 3.6rem;
  background-color: ${COLOURS.primary};
  /* position: fixed;
  top: 0; */
  width: 100%;
  z-index: 2;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
`

export const NavbarContainer = styled('div')`
  margin: 0 auto;
  max-width: ${CONTAINER.WIDTH};
  padding: 1rem;
  height: 3.6rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  & .logo-link {
    height: 3rem;
  }
  & .logo {
    height: 3rem;
    margin: 0;
  }
`
