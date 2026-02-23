import React from 'react'
import { Link } from 'gatsby'

const MainNav = () => {
  return (
    <nav>
      <ul className="m-0 list-none flex gap-8 uppercase font-semibold text-sm">
        <li className="m-0">
          <Link to="/blog" className="text-white no-underline pb-0.5 border-b-2 border-transparent hover:border-secondary transition">Blog</Link>
        </li>
        <li className="m-0">
          <Link to="/contact" className="text-white no-underline pb-0.5 border-b-2 border-transparent hover:border-secondary transition">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
