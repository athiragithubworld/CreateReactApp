import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2023, 23, 27);
  // const expenseTitle = " Car Insurance";
  // const expenseAmount = 298.67;
  // const LocationOfExpenditure = "Mumbai";

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="Location_Of_Expenditure">{props.LocationOfExpenditure}</div>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>

      {/* <h2>Expense Item!!</h2>
            <p>Expense Items</p>
            <p>Food Rs 10</p>
            <p>Petrol Rs 100</p>
            <p>Movies Rs 200</p> */}
    </div>
  );
}
export default ExpenseItem;
