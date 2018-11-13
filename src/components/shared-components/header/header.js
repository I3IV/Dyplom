import React from 'react';

import './header.css';
import Logo from '../logo';
import NavigationList from '../navigation-list';

const Header = ({ navItems, handleClose, loggedIn }) => {

  return (
    <div className="header">
      <Logo />
      <NavigationList
         navItems={navItems}
         handleClose={handleClose}
         loggedIn={loggedIn} />
    </div>
  );
};

export default Header;
