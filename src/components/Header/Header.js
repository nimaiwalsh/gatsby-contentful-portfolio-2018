import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import { Mobile, Default } from '../../utils/responsive-components';
import { HeaderWrapper, NavbarWrapper, NavbarContainer } from './Header_styles';

import MainNav from '../Nav/MainNav.js';
import BurgerMenu from '../Nav/BurgerMenu.js';
import MobileNav from '../Nav/MobileNav.js';
import logo from '../../images/nimaiwalsh-logo-aqua-white.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { menuopen: false };
  };

  //Animate the nav menu when in mobile view
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

  //Trigger open menu and animation
  handleMenuClick = (e) => {
    this.setState({ menuopen: !this.state.menuopen }, this.animateMenu);
  };

  render() {
    return (
      <HeaderWrapper>
        <NavbarWrapper ref={navWrapper => (this.navWrapper = ReactDOM.findDOMNode(navWrapper))}>
          <NavbarContainer>
            <Link to="/">
              <img src={logo} alt="Nimai Walsh Logo" />
            </Link>
            <Default>
              <MainNav />
            </Default>
            <Mobile>
              <BurgerMenu onClick={this.handleMenuClick} open={this.state.menuopen} />
            </Mobile>
          </NavbarContainer>
          <Mobile>
            <MobileNav display={this.state.menuopen} menuClick={this.handleMenuClick}/>
          </Mobile>
        </NavbarWrapper>
      </HeaderWrapper>
    );
  }
}
