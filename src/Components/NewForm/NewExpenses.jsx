import React from "react";
import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new__expenses-container">
      {/* <button>Add New Expenses</button> */}
      <ExpensesForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpenses;
