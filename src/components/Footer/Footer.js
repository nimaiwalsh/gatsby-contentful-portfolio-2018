import React from 'react'
import Link from 'gatsby-link'
import styles from './Footer.styles'

const Footer = () => {
  return (
    <footer className={styles}>
      <div className="container">
        <div className="details">
          <p>&copy; 2018 Nimai Walsh</p>
          <p>
            <Link to="/">Home</Link>
            &nbsp;/&nbsp;
            <Link to="/work">Work</Link>
            &nbsp;/&nbsp;
            <Link to="/blog">Blog</Link>
            &nbsp;/&nbsp;
            <Link to="/contact">Contact</Link>
          </p>
        </div>
        <div className="contributions">
          <p>
            Site built with <span className="heart">&hearts;</span> by Nimai
            with <a className="secondary" href="https://www.gatsbyjs.org/plugins/?=bread" target="_blank" rel="noopener noreferrer">Gatsby</a>{' '}
            and <a className="secondary" href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">Contentful</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
