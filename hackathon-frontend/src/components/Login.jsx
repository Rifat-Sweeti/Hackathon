// src/components/Login.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

const Login = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Hook to navigate after login

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(userData); // Call login API
      if (data.token) {
        localStorage.setItem('token', data.token); // Store token in local storage
        navigate('/dashboard'); // Navigate to the dashboard
      } else {
        alert('Login failed: ' + data.message);
      }
    } catch (error) {
      alert('Error logging in: ' + error.response?.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
};

export default Login;
