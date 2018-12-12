import React from 'react';
import { Link } from 'react-router-dom';


const ChoiceItem = ({ item }) => {
  const className = `item ${item.classN}`;

  return (
    <div className={className}>

        <span className="item-label"><Link to={item.link}>{item.label}</Link></span>

  </div>
  );
}
export default ChoiceItem;
