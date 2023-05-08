import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-NG", {
    month: "long",
  });
  const day = props.date.toLocaleString("en-NG", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="date__container">
      <div className="expense__month">{month}</div>
      <div className="expense__day">{day}</div>
      <div className="expense__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
