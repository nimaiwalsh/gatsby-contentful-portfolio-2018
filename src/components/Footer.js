import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="py-12 bg-zinc-900 mt-24 text-xs font-sans font-normal border-t border-zinc-800">
      <div className="max-w-container mx-auto px-4">
        <div className="flex justify-between text-white/80 mb-2">
          <p className="mb-2">&copy; 2025 Nimai Walsh</p>
          <p className="mb-2">
            <Link to="/" className="text-secondary hover:text-secondary-highlight transition-colors">Home</Link>
            &nbsp;/&nbsp;
            <Link to="/work" className="text-secondary hover:text-secondary-highlight transition-colors">Work</Link>
            &nbsp;/&nbsp;
            <Link to="/blog" className="text-secondary hover:text-secondary-highlight transition-colors">Blog</Link>
            &nbsp;/&nbsp;
            <Link to="/contact" className="text-secondary hover:text-secondary-highlight transition-colors">Contact</Link>
          </p>
        </div>
        <div className="text-white/80">
          <p className="mb-0">
            Site built with <span className="text-secondary">&hearts;</span> by Nimai
            with{' '}
            <a className="text-secondary hover:text-secondary-highlight transition-colors" href="https://www.gatsbyjs.org/plugins/?=bread" target="_blank" rel="noopener noreferrer">Gatsby</a>{' '}
            and{' '}
            <a className="text-secondary hover:text-secondary-highlight transition-colors" href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">Contentful</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
