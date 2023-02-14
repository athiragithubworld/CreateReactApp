import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = () => {
    console.log("New expense");
  return (
    <div className="new-expense">
      <ExpenseForm></ExpenseForm>
    </div>
  );
};

export default NewExpense;
