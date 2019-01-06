import styled from 'react-emotion'
import { COLOURS } from '../../utils/theme'

export const NavigationBackground = styled('div')`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  background-color: ${COLOURS.primary};
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  background-image: radial-gradient(
    ${COLOURS.primary},
    black
  );
  z-index: 1000;

  /*ANIMATION EFFECT*/
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  transform: ${props => props.navOpen && 'scale(80)'};
`

export const BurgerMenuIcon = styled('span')`
  position: relative;
  cursor: pointer;

  &,
  &::before,
  &::after {
    display: inline-block;
    background-color: ${COLOURS.grey};
    width: 1rem;
    height: 3px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    transform: translateY(-0.5rem);
  }

  &::after {
    transform: translateY(0.5rem);
  }

  /*TRANSITION WHEN CLICKED*/
  & {
    background-color: ${props => props.navOpen && 'transparent'};
  }

  &::before {
    transform: ${props => props.navOpen && 'rotate(-135deg)'};
  }
  &::after {
    transform: ${props => props.navOpen && 'rotate(135deg)'};
  }
`

export const NavigationButton = styled('div')`
  background-color: ${COLOURS.white};
  height: 2.5rem;
  width: 2.5rem;
  position: fixed;
  top: .5rem;
  right: 1rem;
  border-radius: 50%;
  z-index: 3000;
  box-shadow: 0 1rem 3rem rgba(${COLOURS.colorBlackRGB}, 0.2);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Nav = styled('nav')`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000;

  /*Transition when opened/closed*/
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  width: ${props => (props.navOpen ? '100%' : 0)};
  opacity: ${props => (props.navOpen ? 1 : 0)};

  & .list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    width: 100%;
  }

  & .item {
    margin: 1rem;
  }

  & .link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 2rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: ${COLOURS.secondary};
      text-decoration: none;
      text-transform: uppercase;

      /*Gradient effect used for animation*/
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        ${COLOURS.white} 50%
      );
      /*Background size increase gives the effect of gradient moving over the link*/
      background-size: 240%;
      transition: all 0.5s;
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: ${COLOURS.primary};
      transform: translateX(1rem);
    }
  }
`

export const NavigationContainer = styled('div')`
`
