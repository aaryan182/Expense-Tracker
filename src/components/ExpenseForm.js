import React, { useState } from 'react';
import './css/ExpenseForm.css'

const ExpenseForm = ({ onAddExpense, balance }) => {
    const [expenseDescription, setExpenseDescription] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');

    const handleDescriptionChange = (event) => {
        setExpenseDescription(event.target.value);
    };

    const handleAmountChange = (event) => {
        setExpenseAmount(parseFloat(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (expenseDescription.trim() === '' || expenseAmount <= 0) {
            alert('Please fill in all the details first.');
            return;
          }
        onAddExpense(expenseDescription, expenseAmount);
        setExpenseDescription('');
        setExpenseAmount('');
    };

    return (
        <div class="expense-form">
            <h2>Expense Details</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Description:
                    <input className='input-box' type="text" value={expenseDescription} onChange={handleDescriptionChange}
                    placeholder='Enter the product you bought' />
                </label>
                <br />
                <label>
                    Amount:
                    <input className='input-box' type="number" value={expenseAmount} onChange={handleAmountChange}
                    placeholder='Enter the price of that bought product' />
                </label>
                <br />
                <h3>Balance: {balance}</h3>
                <button type="submit">Submit</button>
            </form>
        </div>

    );
};

export default ExpenseForm;
