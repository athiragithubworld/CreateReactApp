import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

//   let expensesContent = <p>No expenses found.</p>;

//   if (props.expenses.length > 0 && props.expenses.length !== 1) {
//     expensesContent = props.expenses.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date}
//         LocationOfExpenditure={expense.LocationOfExpenditure}
//       ></ExpenseItem>
//     ));
//   } else if (props.expenses.length === 1) {
//     const message = "Only single Expense here. Please add more...";
//     const content = props.expenses.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date}
//         LocationOfExpenditure={expense.LocationOfExpenditure}
//       ></ExpenseItem>
//     ));
//     expensesContent = [content, message];
//   }

  if(props.expenses.length ===0){
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }
  else if (props.expenses.length === 1) {
    // const message = <p>Only single Expense here. Please add more...</p>;
    const message = "Only single Expense here. Please add more...";
    const content = props.expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        LocationOfExpenditure={expense.LocationOfExpenditure}
      ></ExpenseItem>
    ));
    const expensesContent = [content, message];
    return expensesContent; 
  }

  return <ul className="expenses-list"  >
    {
        
        props.expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              LocationOfExpenditure={expense.LocationOfExpenditure}
              
            ></ExpenseItem>
           
          ))
    }
  </ul>
};

export default ExpensesList;
