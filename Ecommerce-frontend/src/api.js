// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

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
  return axios.post(`${API_URL}/cart`, cartData); 
};

export const handleRegister = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    console.log('Full response:', response); // Log the full response for inspection

    if (response && response.data) {
      console.log('Registration successful:', response.data);
      // Handle successful registration
    } else {
      console.error('No data in response:', response);
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
    }
    console.error('Error config:', error.config);
    
  }
};
