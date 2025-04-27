// src/components/Dashboard.jsx

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if not logged in
    } else {
      // Fetch user data from localStorage (or an API if applicable)
      const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (storedUserInfo) {
        setUserInfo(storedUserInfo);
      } else {
        // If no user data found in localStorage, you can either fetch from an API or handle this scenario accordingly
        setUserInfo({ name: 'John Doe', email: 'john@example.com' });
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo'); // Remove user info from localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {userInfo ? (
        <div>
          <p>Welcome, {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
