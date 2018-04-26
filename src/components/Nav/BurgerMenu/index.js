import React from 'react';

const BurgerMenu = ({ onClick }) => {
  return (
    <div onClick={() => onClick()}>
      Burger Menu
    </div>
  );
};

export default BurgerMenu;