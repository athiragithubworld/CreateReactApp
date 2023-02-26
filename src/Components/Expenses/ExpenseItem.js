import React from "react";

import ExpenseDetails from "./ExpenseDetails";

// import ExpensesFilter from "./ExpensesFilter";

import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [filteredYear ,setFilteredYear] =useState('2020');

  // const filterChangeHandler = selectedYear =>{
  //   setFilteredYear(selectedYear);
  // };

  // // const expenseDate = new Date(2023, 23, 27);
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("Updated");

  // };

  // const [amount, setAmount] = useState(props.amount);
  // const clickHandler2 = () => {
  //   setAmount(100);
  //   console.log(amount);
  // };

  return (
    <Card className="expense-item">
      {/* <ExpenseDate date={props.date}></ExpenseDate>  */}
      {/* can write this way <ExpenseDate/> */}

      <ExpenseDetails
        date={props.date}
        title={props.title}
        LocationOfExpenditure={props.LocationOfExpenditure}
        amount={props.amount}
      ></ExpenseDetails>

      {/* <button onClick={clickHandler}>change Title</button>
      <button onClick={clickHandler2}>change Expense</button> */}
    </Card>
  );
};
export default ExpenseItem;
