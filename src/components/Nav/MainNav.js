import React from 'react';
import styled from 'react-emotion';
import Link from 'gatsby-link';
import { COLOURS } from '../../utils/theme';

const Nav = styled('nav')`
  ul {
    margin: 0;
    list-style: none;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;
    a {
      color: #fff;
      text-decoration: none;
      &:hover, &:focus {
        border-bottom: 4px solid ${COLOURS.secondary};
      }
    }
    li {
      display: inline-block;
      &:not(:last-child) {
        padding: 0 0.5rem;
      }
      margin: 0;
    }
  }
`;

const MainNav = props => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default MainNav;
