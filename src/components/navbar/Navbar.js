import React, { useState } from 'react';
import { Logo, Nav, Menu, MenuLink, Hamburger } from './NavbarStyles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Nav>
      <Logo to="/">
        <i>{'<ekesim />'}</i>
        <span>recipe</span>
      </Logo>

      <Hamburger onClick={handleClick}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to={{ pathname: 'https://github.com/emrekesimemre' }}>
          Github
        </MenuLink>
        <MenuLink to="/login">Login</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
