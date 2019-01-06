import React, { Component } from 'react'
import Link from 'gatsby-link'

import {
  NavigationContainer,
  NavigationBackground,
  NavigationButton,
  BurgerMenuIcon,
  Nav,
} from './MobileNav.styles'

export default class MobileNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navopen: false,
    }
  }

  toggleNav = () => {
    this.setState({ navopen: !this.state.navopen })
  }

  render() {
    const { navopen } = this.state
    return (
      <NavigationContainer>
        <NavigationBackground navOpen={navopen} />
        <NavigationButton onClick={this.toggleNav}>
          <BurgerMenuIcon navOpen={navopen} />
        </NavigationButton>
        <Nav navOpen={navopen}>
          <ul className="list" onClick={this.toggleNav}>
            <li className="item">
              <Link className="link" to="#about">
                Work
              </Link>
            </li>
            <li className="item">
              <Link className="link" to="#features">
                About
              </Link>
            </li>
            <li className="item">
              <Link className="link" to="#tours">
                Blog
              </Link>
            </li>
            <li className="item">
              <Link className="link" to="#stories">
                Contact
              </Link>
            </li>
          </ul>
        </Nav>
      </NavigationContainer>
    )
  }
}
