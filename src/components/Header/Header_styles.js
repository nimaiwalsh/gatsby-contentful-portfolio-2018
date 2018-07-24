import styled from 'react-emotion';
import { CONTAINER, COLOURS } from '../../utils/theme';

export const HeaderWrapper = styled('div')`
  position: relative;
  height: 5.45rem;
`;

export const NavbarWrapper = styled('div')`
  background-color: ${COLOURS.primary};
  position: fixed;
  width: 100%;
  z-index: 2;
  overflow: hidden;
  box-shadow: 0 .1rem .2rem rgba(0,0,0,.7);
`;

export const NavbarContainer = styled('div')`
  margin: 0 auto;
  max-width: ${CONTAINER.WIDTH};
  padding: 1rem;
  height: 5.45rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  & .logo {
    height: 3rem;
    margin: 0;
  }
`;