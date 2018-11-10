import React from 'react';

import './header.css';
import Logo from '../logo';
import NavigationList from '../navigation-list';

const Header = ({ navItems }) => {

  return (
    <div className="header">
      <Logo />
      <NavigationList navItems={navItems} />
    </div>
  );
};

export default Header;
