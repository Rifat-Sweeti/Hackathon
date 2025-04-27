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
      // Call an API to fetch user data here (assuming you have an endpoint for that)
      setUserInfo({ name: 'John Doe', email: 'john@example.com' });
    }
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      {userInfo ? (
        <div>
          <p>Welcome, {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <button onClick={() => localStorage.removeItem('token')}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
