import React, { Component } from 'react'
import { Link } from 'gatsby'

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
      <div>
        {/* Expanding circle background */}
        <div
          className="h-6 w-6 rounded-full bg-primary fixed top-5 right-6 z-[1000] transition-transform duration-700"
          style={{ transform: navopen ? 'scale(100)' : 'scale(1)', transitionTimingFunction: 'cubic-bezier(0.86, 0, 0.07, 1)' }}
        />

        {/* Burger button */}
        <div
          onClick={this.toggleNav}
          className="bg-white h-10 w-10 fixed top-[14px] right-4 rounded-full z-[3000] shadow-lg cursor-pointer flex items-center justify-center"
        >
          <span className="relative inline-block w-4 h-[3px]" style={{
            backgroundColor: navopen ? 'transparent' : '#090909',
          }}>
            <span className="absolute left-0 w-4 h-[3px] bg-zinc-900 transition-all duration-200" style={{
              top: 0,
              transform: navopen ? 'rotate(-135deg)' : 'translateY(-8px)',
            }} />
            <span className="absolute left-0 w-4 h-[3px] bg-zinc-900 transition-all duration-200" style={{
              top: 0,
              transform: navopen ? 'rotate(135deg)' : 'translateY(8px)',
            }} />
          </span>
        </div>

        {/* Nav drawer */}
        <nav
          className="h-screen fixed top-0 right-0 z-[2000] overflow-hidden"
          style={{
            width: navopen ? '100%' : 0,
            opacity: navopen ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          }}
        >
          <ul
            onClick={this.toggleNav}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 list-none text-center w-full m-0"
          >
            {['work', 'about', 'blog', 'contact'].map(page => (
              <li key={page} className="my-4">
                <Link
                  to={`/${page}`}
                  className="inline-block text-3xl font-light py-4 px-8 text-primary no-underline uppercase transition-all duration-500 hover:text-primary hover:translate-x-4"
                  style={{
                    backgroundImage: 'linear-gradient(120deg, transparent 0%, transparent 50%, white 50%)',
                    backgroundSize: '240%',
                  }}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}
