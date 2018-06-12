import React from 'react';
import { css } from 'react-emotion';

const container = css`
  cursor: pointer;

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #fff;
    margin: 6px 0;
    border-radius: 3px;
    transition: 0.4s;
  }
`;

//animation when clicked - turn menu into a cross
const change = css`
  .bar1 {
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .bar2 {
    opacity: 0;
  }

  .bar3 {
    transform: rotate(45deg) translate(-8px, -8px);
  }
`;

const BurgerMenu = ({ onClick, open }) => {
  return (
    <div
      className={open ? `${container} ${change}` : `${container}`}
      onClick={() => onClick()}
    >
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </div>
  );
};

export default BurgerMenu;
