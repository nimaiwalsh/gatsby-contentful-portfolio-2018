import React, { Component } from 'react'
import { Link } from 'gatsby'

import { Mobile, Default } from '../../utils/responsive-components'
import { HeaderWrapper, NavbarContainer } from './Header.styles'
import MainNav from '../Nav/MainNav'
import MobileNav from '../Nav/MobileNav'
import logo from '../../images/nimaiwalsh-logo.svg'

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <NavbarContainer>
          <Link to="/" className="logo-link">
            <img className="logo" src={logo} alt="Nimai Walsh Logo" />
          </Link>
          <Default>
            <MainNav />
          </Default>
          <Mobile>
            <MobileNav />
          </Mobile>
        </NavbarContainer>
      </HeaderWrapper>
    )
  }
}
