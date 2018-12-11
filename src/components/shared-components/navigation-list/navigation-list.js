import React from 'react';

import './navigation-list.css';
import NavigationListItem from '../navigation-list-item';

const NavigationList = ({ navItems = [], handleClose, loggedIn }) => {

  return (
    <div className="navigation-list">
      <ul>
        {
          navItems.map((item) => {
          return <NavigationListItem
            item = {item}
            key = {item.label}
            handleClose={handleClose}
            loggedIn={loggedIn} />;
        })
        }
      </ul>
    </div>
  );
}
export default NavigationList;
