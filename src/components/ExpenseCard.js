import React, { useState } from 'react';
import './css/ExpenseCard.css';

const ExpenseCard = ({ date, expenses, onEditExpense }) => {
  const [editableExpenseIndex, setEditableExpenseIndex] = useState(-1);
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedAmount, setUpdatedAmount] = useState(0);

  const handleEditClick = (index, description, amount) => {
    setEditableExpenseIndex(index);
    setUpdatedDescription(description);
    setUpdatedAmount(amount);
  };

  const handleDescriptionChange = (event) => {
    setUpdatedDescription(event.target.value);
  };

  const handleAmountChange = (event) => {
    setUpdatedAmount(parseFloat(event.target.value));
  };

  const handleSaveClick = () => {
    if (updatedDescription && updatedAmount >= 0) {
      onEditExpense(editableExpenseIndex, updatedDescription, updatedAmount);
      setEditableExpenseIndex(-1);
    }
  };

  const handleCancelClick = () => {
    setEditableExpenseIndex(-1);
  };

  return (
    <div className="expense-card">
      <h3>Date: {date}</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className="expense-item">
            <span>{expense.description}</span>
            {editableExpenseIndex === index ? (
              <>
                <input type="text" value={updatedDescription} onChange={handleDescriptionChange} />
                <input type="number" value={updatedAmount} onChange={handleAmountChange} />
                <button className="save-btn" onClick={handleSaveClick}>Save</button>
                <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
              </>
            ) : (
              <>
                <span>{expense.amount}</span>
                <button className="edit-btn" onClick={() => handleEditClick(index, expense.description, expense.amount)}>
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseCard;
