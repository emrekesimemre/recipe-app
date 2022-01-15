import React, { useState } from 'react';
import { Logo, Nav, Menu, MenuLink, Hamburger } from './NavbarStyles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    
  };

  const handleLogin = () => {
    setIsLogin(true);
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
        <MenuLink
          as="a"
          href="https://github.com/emrekesimemre"
          target="_blank"
        >
          Github
        </MenuLink>
        <MenuLink onClick={handleLogin} to="/login">
          {!isLogin ? 'Logout' : 'Login'}
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
