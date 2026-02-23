import React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/react'
import { CONTAINER, COLOURS } from '../utils/theme'

const Footer = () => {
  return (
    <footer css={styles}>
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

const styles = css`
  padding: 2rem 0;
  background-color: #111;
  display: flex;
  justify-content: center;
  font-size: 0.7rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  margin-top: 6rem;

  & .container {
    padding: ${CONTAINER.PADDING};
    max-width: ${CONTAINER.WIDTH};
    width: 100%;
    a {
      color: ${COLOURS.secondary};
    }
    a:hover,
    a:active {
      border-bottom: 3px solid ${COLOURS.white};
    }
  }

  & .details {
    display: flex;
    justify-content: space-between;
    color: rgba(${COLOURS.whiteRGB}, 0.8);
    & p {
      margin-bottom: 0.5rem;
    }
  }

  & .contributions {
    color: rgba(${COLOURS.whiteRGB}, 0.8);
    & .heart {
      color: ${COLOURS.secondary};
    }
    & p {
      margin-bottom: 0;
    }
  }
`
