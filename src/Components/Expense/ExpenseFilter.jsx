import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const onChangeFilterHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expense__filter-container">
      <div>Filter By Year</div>
      <select
        value={props.selected}
        onChange={onChangeFilterHandler}
        className="select__container"
      >
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
