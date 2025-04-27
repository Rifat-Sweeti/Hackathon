// src/api.js

import axios from 'axios';

const API = 'http://localhost:5000/api'; // Update this if your API URL is different

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API}/register`, userData);
    return response.data; // On success, return the response data
  } catch (error) {
    console.error('Registration Error:', error.response?.data || error.message);
    throw error; // Throw error for handling in the component
  }
};

// Login User
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API}/login`, userData);
    return response.data; // Return the response (e.g., JWT token)
  } catch (error) {
    console.error('Login Error:', error.response?.data || error.message);
    throw error; // Throw error for handling in the component
  }
};
