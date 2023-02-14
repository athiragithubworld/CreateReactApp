import React, { useState } from "react";


import ExpenseDetails from "./ExpenseDetails";

import "./ExpenseItem.css";
// import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2023, 23, 27);
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    setTitle("Updated");
    
    
  };
  console.log(title);
  const [amount, setAmount] = useState(props.amount);
  const clickHandler2 = () => {
    setAmount(100);
    console.log(amount);
  };

  return (
    <div className="expense-item">
      
      {/* <ExpenseDate date={props.date}></ExpenseDate>  */}
      {/* can write this way <ExpenseDate/> */}
      <ExpenseDetails
        date={props.date}
        title={title}
        LocationOfExpenditure={props.LocationOfExpenditure}
        amount={amount}
      ></ExpenseDetails>
      <button onClick={clickHandler}>change Title</button>
      <button onClick={clickHandler2}>change Expense</button>
      {/* <h2>Expense Item!!</h2>
            <p>Expense Items</p>
            <p>Food Rs 10</p>
            <p>Petrol Rs 100</p>
            <p>Movies Rs 200</p> */}
    </div>
  );
};
export default ExpenseItem;
