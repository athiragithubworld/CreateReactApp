// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";

import NewExpense from "./Components/NewExpense/NewExpense";

import ExpensesFilter from "./Components/Expenses/ExpensesFilter";

import ExpensesList from "./Components/Expenses/ExpensesList";

import ExpensesChart from "./Components/Expenses/ExpensesChart";

//  import './ExpenseItem.css';

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    LocationOfExpenditure: "Mumbai",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    LocationOfExpenditure: "pune",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    LocationOfExpenditure: "Delhi",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    LocationOfExpenditure: "Mumbai",
  },
];

const App = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    // console.log('In App.js');
    // console.log(expense);
    // console.log(expense.title)
  };

  const filterExpense = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  

  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filterExpense}></ExpensesChart>
      <ExpensesList expenses={filterExpense}></ExpensesList>

      {/* {filterExpense.length === 0 && <p>No Expenses found.</p>} */}
      {/* {filterExpense.length === 0 &&  } */}

      {/* {filterExpense.length ===0 ? <p> No Expenses found.</p> : filterExpense.map(expense => (
          // <div key={expense.id}>
          <ExpenseItem 
              
              key ={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              LocationOfExpenditure={expense.LocationOfExpenditure}
            ></ExpenseItem>
          // </div>
        )) } */}
    </div>
  );
};

export default App;
