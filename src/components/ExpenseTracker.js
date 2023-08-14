import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseCard from './ExpenseCard';
import './css/ExpenseTracker.css';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date().toDateString());
  const [balance, setBalance] = useState(0); // Initial balance

  const addExpense = (description, amount) => {
    const newExpense = { description, amount };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setBalance((prevBalance) => prevBalance - amount);
  };

  const editExpense = (index, description, amount) => {
    if (index >= 0 && index < expenses.length) {
      const updatedExpenses = [...expenses];
      const oldAmount = updatedExpenses[index].amount;
      updatedExpenses[index].description = description;
      updatedExpenses[index].amount = amount;
      setExpenses(updatedExpenses);
      setBalance((prevBalance) => prevBalance + oldAmount - amount);
    }
  };

  const handleBalanceChange = (event) => {
    setBalance(parseFloat(event.target.value));
  };

  return (
    <div className="expense-tracker">
      <form>
        <label>
          Update Balance:
          <input type="number" value={balance} onChange={handleBalanceChange} />
        </label>
      </form>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} balance={balance} />
      <ExpenseCard date={currentDate} expenses={expenses} onEditExpense={editExpense} />
      <h2 className="current-balance">Current Balance: {balance}</h2>
    </div>
  );
};

export default ExpenseTracker;
