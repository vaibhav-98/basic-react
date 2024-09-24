import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // States for new title and the actual title
  const [newTitle, setNewTitle] = useState('');  // Start with an empty string
  const [title, setTitle] = useState(props.title);

  // Handles updating the title when the button is clicked
  const clickHandler = () => {
    setTitle(newTitle);  // Update title to the new input value
  };

  // Handles input changes for the new title
  const changeHandler = (event) => {
    setNewTitle(event.target.value);  // Update newTitle with input value
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        {/* Input field to type new title */}
        <input type="text" value={newTitle} onChange={changeHandler} />
        {/* Button to update the title */}
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
