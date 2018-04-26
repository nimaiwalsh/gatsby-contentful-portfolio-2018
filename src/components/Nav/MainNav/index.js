import React from 'react';
import styled from 'react-emotion';
import Link from 'gatsby-link';

const Nav = styled('nav')`
  ul {
    margin: 0;
    list-style: none;
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        border-bottom: 4px solid #94e0d1;
      }
    }
    li {
      display: inline-block;
      padding: 10px;
      margin: 0;
    }
  }
`;

const MainNav = () => {
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
          <Link to="/journal">Journal</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default MainNav;
