import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2023, 23, 27);

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>{/* can write this way <ExpenseDate/> */}
      <ExpenseDetails
          title={props.title}
          LocationOfExpenditure={props.LocationOfExpenditure}
          amount={props.amount}
        ></ExpenseDetails>
     
      {/* <h2>Expense Item!!</h2>
            <p>Expense Items</p>
            <p>Food Rs 10</p>
            <p>Petrol Rs 100</p>
            <p>Movies Rs 200</p> */}
    </div>
  );
}
export default ExpenseItem;
