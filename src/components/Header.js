import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { CONTAINER, COLOURS } from '../utils/theme'
import { Phone, Default } from '../utils/responsive-components'
import MainNav from './Nav/MainNav'
import MobileNav from './Nav/MobileNav'
import logo from '../images/nimaiwalsh-logo.svg'

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
          <Phone>
            <MobileNav />
          </Phone>
        </NavbarContainer>
      </HeaderWrapper>
    )
  }
}

export const HeaderWrapper = styled.div`
  height: 72px;
  background-color: ${COLOURS.primary};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
`

export const NavbarContainer = styled.div`
  margin: 0 auto;
  max-width: ${CONTAINER.WIDTH};
  padding: 1rem;
  height: 72px;
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
