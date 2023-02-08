import "./ExpenseItem.css";

function ExpenseDetails(props) {
    const LocationOfExpenditure = props.LocationOfExpenditure ;
    const amount =props.amount;
    const title=props.title;
    
    return(
        <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="Location_Of_Expenditure">{LocationOfExpenditure}</div>
        <div className="expense-item__price"> ${amount}</div>
      </div>
    );

    
}
export default ExpenseDetails;