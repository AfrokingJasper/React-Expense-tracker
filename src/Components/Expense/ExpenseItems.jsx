import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItems = (props) => {
  return (
    <div className="expense__items-container">
      {props.items.map((exp) => {
        return (
          <div key={exp.id} className="expense__items-subcontainer">
            <div className="expense__item-left">
              <ExpenseDate date={exp.date} />
              <p className="item__title">{exp.title}</p>
            </div>
            <div className="expense__price-container">
              <p className="expense__price">${exp.amount}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseItems;
