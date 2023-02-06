import "./ExpenseItem.css";

function ExpenseItem(){
    const expenseDate = new Date(2023 , 23,27);
    const expenseTitle = ' Car Insurance';
    const expenseAmount = 298.67;
    const LocationOfExpenditure = 'Mumbai'

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
              <h2>{expenseTitle}</h2>
              <div className="Location_Of_Expenditure">{LocationOfExpenditure}</div>
              <div className="expense-item__price"> ${expenseAmount}</div>
              
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