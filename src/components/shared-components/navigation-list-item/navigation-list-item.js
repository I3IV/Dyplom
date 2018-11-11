import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const NavigationListItem = ({item}) => {

  return (
    <li>
      <Link to={item.link}>
        <Button className="button">{item.label}</Button>
      </Link>
  </li>
  );
}
export default NavigationListItem;
