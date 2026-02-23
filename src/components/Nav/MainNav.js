import React from 'react'
import { Link } from 'gatsby'

const MainNav = () => {
  return (
    <nav>
      <ul className="m-0 list-none flex gap-2 uppercase font-semibold text-sm">
        <li className="m-0">
          <Link to="/work" className="text-white no-underline hover:border-b-4 hover:border-primary transition">Work</Link>
        </li>
        <li className="m-0">
          <Link to="/about" className="text-white no-underline hover:border-b-4 hover:border-primary transition">About</Link>
        </li>
        <li className="m-0">
          <Link to="/blog" className="text-white no-underline hover:border-b-4 hover:border-primary transition">Blog</Link>
        </li>
        <li className="m-0">
          <Link to="/contact" className="text-white no-underline hover:border-b-4 hover:border-primary transition">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
