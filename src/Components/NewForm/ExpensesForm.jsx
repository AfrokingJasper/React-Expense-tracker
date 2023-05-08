import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = (props) => {
  const [enteredTitle, setEnteredTtile] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTtile(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredTtile("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler} className="expenses__form">
      <div className="expenses__form-container">
        <div className="form__input-container">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="form__input-container">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="form__input-container">
          <label>Date</label>
          <input
            min="2023-04-01"
            max="2025-12-31"
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="expense__button-cobtainer">
        <button type="button" className="expense__button">
          Cancel
        </button>
        <button type="submit" className="expense__button">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpensesForm;
