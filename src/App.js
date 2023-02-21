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
import React ,{useState} from "react";

import NewExpense from "./Components/NewExpense/NewExpense";

import ExpenseItem from "./Components/Expenses/ExpenseItem";


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

const  App =  (props) => {
  
  const [expenses , setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return[expense ,...prevExpenses];
    });
    
    // console.log('In App.js');
    // console.log(expense);
    // console.log(expense.title)
    
  }

  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      {
        
        expenses.map(expense => (
          <div key={expense.id}>
            <ExpenseItem 
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              LocationOfExpenditure={expense.LocationOfExpenditure}
            ></ExpenseItem>
          </div>
        ))
      }

    </div>
  );
}

export default App;
