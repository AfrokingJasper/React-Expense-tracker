import React, { useState } from "react";
import NewExpenses from "./Components/NewForm/NewExpenses";
import Expenses from "./Components/Expense/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 5, 28),
  },
  {
    id: "e3",
    title: "New Desk",
    amount: 294.67,
    date: new Date(2021, 8, 28),
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 2943.67,
    date: new Date(2020, 6, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHnadler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHnadler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
