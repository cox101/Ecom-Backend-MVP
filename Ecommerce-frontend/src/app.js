// src/App.js
import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <h1>E-commerce Frontend</h1>
      <Register />
      <Login />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
