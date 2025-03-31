import React, { useState } from 'react';
import CapitalCard from './components/CapitalCard';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const capitals = [
    { name: 'واشنطن العاصمة', timezone: 'America/New_York', image: 'https://via.placeholder.com/300x200?text=Washington' },
    { name: 'لندن', timezone: 'Europe/London', image: 'https://via.placeholder.com/300x200?text=London' },
    // أضف المزيد من العواصم لاحقاً
  ];

  return (
    <div className="app">
      <div className="lang-switch">
        <button>العربية</button>
        <button>Español</button>
      </div>
      <h1>توقيت عواصم العالم</h1>
      {!isLoggedIn ? (
        showSignup ? <Signup setIsLoggedIn={setIsLoggedIn} setShowSignup={setShowSignup} /> : 
        <Login setIsLoggedIn={setIsLoggedIn} setShowSignup={setShowSignup} />
      ) : (
        <Dashboard />
      )}
      <div className="capital-grid">
        {capitals.map((capital, index) => (
          <CapitalCard key={index} capital={capital} />
        ))}
      </div>
    </div>
  );
};

export default App;