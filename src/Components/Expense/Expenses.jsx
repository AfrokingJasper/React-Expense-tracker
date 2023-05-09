import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpenseChart expenses={filteredExpense} />
        <ExpenseItems items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
