import React,{useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
const [enteredtitle, setEnteredtitle] = useState('');

const titleChangeHandler =(event) =>{
    setEnteredtitle(event.target.value);
}

const[enteredAmount,setEnteredAmount]=useState('');

const amountChangeHandler =(event) =>{
    setEnteredAmount(event.target.value);
}

const[enteredDate,setEnteredDate] = useState('');

const dateChangeHandler =(event) =>{
    setEnteredDate(event.target.value);
}
    return (
        <form >
            
            <h2>Add Expenses</h2>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01"  step="0.01"  onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  min="2019-01-01"  max="2024-01-01" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit">Add Expense</button>
            </div>
        </form>
        
    );
}
export default ExpenseForm;