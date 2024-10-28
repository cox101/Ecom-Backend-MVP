// src/App.js
import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">E-commerce</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
            </ul>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
