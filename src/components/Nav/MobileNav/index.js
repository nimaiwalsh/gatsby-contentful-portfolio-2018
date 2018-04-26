import React from 'react';
import { css } from 'react-emotion';
import Link from 'gatsby-link';

const styles = css`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  a {
    color: #FFF;
  } 
`

const MobileNav = () => {
  return (
    <nav className={styles}>
      <ul>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/journal">Journal</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
