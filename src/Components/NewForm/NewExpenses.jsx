import React, { useState } from "react";
import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };
  return (
    <div className="new__expenses-container">
      {!isEditing && (
        <button onClick={startEditing} className="expense__button">
          Add New Expenses
        </button>
      )}
      {isEditing && (
        <ExpensesForm
          onCancel={stopEditing}
          onSaveExpenseData={saveExpenseDateHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
