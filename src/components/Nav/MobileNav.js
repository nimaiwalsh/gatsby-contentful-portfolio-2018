import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';

const Nav = styled('nav')`
  width: 100%;
  align-items: center;
  display: ${props => props.open ? 'block' : 'none'};

  ul {
    list-style: none;
    margin: 0;
  }

  li {
    text-align: center;
  }

  a {
    color: #FFF;
  } 
`

const MobileNav = ({open, menuClick} ) => {
  return (
    <Nav open={open}>
      <ul onClick={() => menuClick()}>
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

export default MobileNav;
