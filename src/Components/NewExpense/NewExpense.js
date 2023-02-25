import React,{useState} from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) =>{
      const expenseData = {
        ...enteredExpenseData ,
        id:Math.random().toString()
      };
      // console.log(expenseData);
      props.onAddExpense(expenseData);
      setIsEditing (false);
    };

    
  const [IsEditing , setIsEditing] = useState(false);
  
  const startEditingHandler = () => {
    setIsEditing (true);
    console.log("Add new expense");
  }

  const stopEditingHandler = () =>{
    setIsEditing (false);
  }

  return (
    <div className="new-expense">
      {!IsEditing && <button onClick={startEditingHandler}>Add New Expense</button>} 
      {IsEditing && 
      <ExpenseForm 
      onSaveExpenseData ={saveExpenseDataHandler}
      onCancel = {stopEditingHandler}
      ></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
