import React from 'react';

import './navigation-list.css';
import NavigationListItem from '../navigation-list-item';

const NavigationList = ({ navItems = [] }) => {

  return (
    <div className="navigation-list">
      <ul>
        {
          navItems.map((item) => {
          return <NavigationListItem item = {item} key = {item.label} />;
        })
        }
      </ul>
    </div>
  );
}
export default NavigationList;
