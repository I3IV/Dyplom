import React from 'react';

const ChoiceItem = ({ item }) => {
  const className = `item ${item.classN}`;

  return (
    <div className={className}>
      <span className="item-label">{item.label}</span>
    </div>
  );
}
export default ChoiceItem;
