import React from 'react';

import '../main-page.css';
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
