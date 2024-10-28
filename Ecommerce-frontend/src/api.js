// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust if necessary

export const registerUser = (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = (userData) => {
  return axios.post(`${API_URL}/auth/login`, userData);
};

export const fetchProducts = () => {
  return axios.get(`${API_URL}/products`);
};

export const addToCart = (cartData) => {
  return axios.post(`${API_URL}/cart`, cartData); // Adjust the endpoint as needed
};

