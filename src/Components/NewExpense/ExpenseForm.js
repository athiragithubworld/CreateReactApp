import React,{useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {

//     // multiple state
const [enteredtitle, setEnteredTitle] = useState('');
const[enteredAmount,setEnteredAmount]=useState('');
const[enteredDate,setEnteredDate] = useState('');

// // Using one state instead of multiple state with the help of object

// const [userInput , setUserInput] = useState({
//     enteredTitle :'',
//     enteredAmount:'',
//     enteredDate :''
// });

const titleChangeHandler =(event) =>{
    setEnteredTitle(event.target.value);

// // setUserInput({
// //     ...userInput ,
// //     enteredTitle:event.target.value
// // })

// // to get previous values up to date
// setUserInput((prevState) =>{
//     return{ ...prevState , enteredTitle:event.target.value }
// })

}

const amountChangeHandler =(event) =>{
    setEnteredAmount(event.target.value);
//     // setUserInput({
//     //     ...userInput ,
//     //     enteredAmount:event.target.value
//     // })

//     // to get previous values up to date
// setUserInput((prevState) =>{
//     return{ ...prevState , enteredAmount:event.target.value }
// })
}



const dateChangeHandler =(event) =>{
    setEnteredDate(event.target.value);

//     // setUserInput({
//     //     ...userInput ,
//     //     enteredDate:event.target.value
//     // })

//     // to get previous values up to date
// setUserInput((prevState) =>{
//     return{ ...prevState , enteredDate:event.target.value }
// })


}

const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title : enteredtitle ,
        amount :enteredAmount,
        date:new Date(enteredDate)
    }
    
    console.log(expenseData);
  };
    return (
        <form  onSubmit={submitHandler}>
            
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
                <button type="submit" >Add Expense</button>
            </div>
        </form>
        
    );
}
export default ExpenseForm;