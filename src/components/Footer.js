import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="py-8 bg-zinc-900 mt-24 text-xs font-sans font-normal">
      <div className="max-w-container mx-auto px-4">
        <div className="flex justify-between text-white/80 mb-2">
          <p className="mb-2">&copy; 2018 Nimai Walsh</p>
          <p className="mb-2">
            <Link to="/" className="text-primary hover:border-b-2 hover:border-white">Home</Link>
            &nbsp;/&nbsp;
            <Link to="/work" className="text-primary hover:border-b-2 hover:border-white">Work</Link>
            &nbsp;/&nbsp;
            <Link to="/blog" className="text-primary hover:border-b-2 hover:border-white">Blog</Link>
            &nbsp;/&nbsp;
            <Link to="/contact" className="text-primary hover:border-b-2 hover:border-white">Contact</Link>
          </p>
        </div>
        <div className="text-white/80">
          <p className="mb-0">
            Site built with <span className="text-primary">&hearts;</span> by Nimai
            with{' '}
            <a className="text-primary hover:border-b-2 hover:border-white" href="https://www.gatsbyjs.org/plugins/?=bread" target="_blank" rel="noopener noreferrer">Gatsby</a>{' '}
            and{' '}
            <a className="text-primary hover:border-b-2 hover:border-white" href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">Contentful</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
