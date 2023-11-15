import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';
import './App.css'; 

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  function App() {
   
  }
  

  useEffect(() => {
    
    setTransactions([
   
    ]);

   
  }, []);

  const addTransaction = (newTransaction) => {
    
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (searchTerm) => {
   
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>~BANK OF FLATIRON~</h1>
      <SearchBar handleSearch={handleSearch} />
      <TransactionList transactions={filteredTransactions.length ? filteredTransactions : transactions} />
      <TransactionForm addTransaction={addTransaction} />
    </div>
  );
}

export default App;

