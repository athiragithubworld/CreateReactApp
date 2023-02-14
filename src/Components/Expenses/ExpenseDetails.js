import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
 import Card from "../UI/Card";

const   ExpenseDetails  =  (props)  => {
    const LocationOfExpenditure = props.LocationOfExpenditure ;
    const amount =props.amount;
    const title=props.title;
    
    return(
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
        <h2>{title}</h2>
        
        <div className="Location_Of_Expenditure">{LocationOfExpenditure}</div>
        <div className="expense-item__price"> ${amount}</div>
      </div>
      </Card>
    );

    
}
export default ExpenseDetails;