import React, { Component } from 'react'
import { Link } from 'gatsby'

import MainNav from './Nav/MainNav'
import MobileNav from './Nav/MobileNav'
import logo from '../images/nimaiwalsh-logo.svg'

export default class Header extends Component {
  render() {
    return (
      <div className="h-[72px] bg-zinc-900 fixed top-0 w-full z-20 shadow-md">
        <div className="max-w-container mx-auto px-4 h-[72px] flex justify-between items-center">
          <Link to="/" className="h-12 inline-flex items-center">
            <img className="h-12 m-0" src={logo} alt="Nimai Walsh Logo" />
          </Link>
          <div className="hidden md:block">
            <MainNav />
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    )
  }
}
