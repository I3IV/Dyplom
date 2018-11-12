import React from 'react';
import Button from '@material-ui/core/Button';

const NavigationListItem = ({item}) => {

  return (
    <li><Button className="button">{item.label}</Button></li>
  );
}
export default NavigationListItem;
