import styled from 'react-emotion';
import { CONTAINER } from '../../utils/theme';

export const HeaderWrapper = styled('div')`
  position: relative;
  height: 129px;
`;

export const NavbarWrapper = styled('div')`
  background-color: #254b80;
  position: fixed;
  width: 100%;
  z-index: 2;
  overflow: hidden;
`;

export const NavbarContainer = styled('div')`
  margin: 0 auto;
  max-width: ${CONTAINER.WIDTH};
  padding: 1rem 1.0875rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  img {
    height: 80px;
    margin: 0;
  }
`;