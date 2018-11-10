import React from 'react';

import './choice.css';
import ChoiceItem from '../choice-item';

const Choice = ({ choiceItems }) => {
  return (
    <div className="choice">
      {
        choiceItems.map((item) => {
          return <ChoiceItem item={ item } key = { item.classN } />
        })
      }
    </div>
  );
}
export default Choice;
