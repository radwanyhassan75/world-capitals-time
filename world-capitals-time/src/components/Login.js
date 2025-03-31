import React from 'react';

const Login = ({ setIsLoggedIn, setShowSignup }) => {
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) setIsLoggedIn(true); // عند النجاح في تسجيل الدخول
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>تسجيل الدخول</h2>
      <input type="email" placeholder="البريد الإلكتروني" required />
      <input type="password" placeholder="كلمة المرور" required />
      <button type="submit">تسجيل الدخول</button>
      <button type="button" onClick={() => setShowSignup(true)}>إنشاء حساب</button>
    </form>
  );
};

export default Login;
