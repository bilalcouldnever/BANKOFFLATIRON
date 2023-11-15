import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !category || !amount) {
      alert('Please fill in all fields');
      return;
    }


    const newTransaction = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      description,
      category,
      amount: parseFloat(amount),
    };

   
    addTransaction(newTransaction);

    
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>Description: </label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <label>Category: </label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        <br />
        <label>Amount: </label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <br />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
