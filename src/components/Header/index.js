import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled, { keyframes } from 'react-emotion';
import { Mobile, Default } from '../../utils/responsive-components';

import MainNav from '../Nav/MainNav';
import BurgerMenu from '../Nav/BurgerMenu';
import MobileNav from '../Nav/MobileNav';
import logo from '../../images/nimaiwalsh-logo-aqua-white.svg';

const HeaderWrapper = styled('div')`
  position: relative;
  height: 129px;
`;

const NavbarWrapper = styled('div')`
  // rgba(37, 75, 128, 0.8)
  background-color: #254b80;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

const NavbarContainer = styled('div')`
  margin: 0 auto;
  max-width: 960px;
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

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { menuopen: false };
  }

  animateMenu = () => {
    let direction = '';
    this.state.menuopen ? (direction = 'normal') : (direction = 'reverse');

    this.navWrapper.animate([{ height: '129px' }, { height: '100vh' }], {
      duration: 500,
      fill: 'forwards',
      easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
      iterations: 1,
      direction: `${direction}`,
    });
  };

  handleMenuClick = () => {
    this.setState({ menuopen: !this.state.menuopen }, this.animateMenu);
  };

  render() {
    const { data, location } = this.props;
    return (
      <HeaderWrapper>
        <NavbarWrapper
          ref={navWrapper =>
            (this.navWrapper = ReactDOM.findDOMNode(navWrapper))
          }
        >
          <NavbarContainer>
            <Link to="/">
              <img src={logo} alt="Nimai Walsh Logo" />
            </Link>
            <Default>
              <MainNav />
            </Default>
            <Mobile>
              <BurgerMenu onClick={this.handleMenuClick} />
            </Mobile>
          </NavbarContainer>
        </NavbarWrapper>
      </HeaderWrapper>
    );
  }
}
