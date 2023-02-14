import "./ExpenseForm.css";

const ExpenseForm = () => {
const titleChangeHandler =(event) =>{
    console.log(event.target.value);
}

const amountChangeHandler =(event) =>{
    console.log(event.target.value);
}

const dateChangeHandler =(event) =>{
    console.log(event.target.value);
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