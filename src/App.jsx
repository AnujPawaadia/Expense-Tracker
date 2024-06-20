import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [input, setInput] = useState('');
  const [amount, setAmount] = useState('');
  const [expense, setExpense] = useState([]);

  // Function to add an expense
  const addExpense = () => {
    if (!input || !amount) return;

    const newExpense = {
      id: expense.length + 1,
      title: input,
      amount: parseFloat(amount) // Convert amount to a number
    };

    setExpense([...expense, newExpense]);
    setInput('');
    setAmount('');
  };

  // Function to delete an expense
  const deleteExpense = (id) => {
    setExpense(expense.filter((exp) => exp.id !== id));
  };

  // Function to calculate the total expenses
  const calculateTotal = () => {
    return expense.reduce((total, exp) => total + exp.amount, 0).toFixed(2);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="input-group">
        <input
          type='text'
          placeholder='Expense'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type='number'
          placeholder='Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>

      <ul className='expense-list'>
        {expense.map((exp) => (
          <li key={exp.id}>
            {exp.title}: ₹{exp.amount}
            <button onClick={() => deleteExpense(exp.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div className="total">
        Total Expenses: ₹{calculateTotal()}
      </div>
    </div>
  );
};

export default App;
