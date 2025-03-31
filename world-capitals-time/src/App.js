import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      {showSignup ? (
        <Signup setIsLoggedIn={setIsLoggedIn} setShowSignup={setShowSignup} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} setShowSignup={setShowSignup} />
      )}
    </div>
  );
};

export default App;
