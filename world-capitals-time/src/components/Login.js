import React from 'react';

const Login = ({ setIsLoggedIn, setShowSignup }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    // هنا ستربط مع الخادم لاحقاً
    setIsLoggedIn(true);
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
// في Login.js
const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) setIsLoggedIn(true);
  };
  
  // في Signup.js
  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const res = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    if (res.ok) setIsLoggedIn(true);
  };
  
  // في Timer.js
  const handleSetTimer = async (e) => {
    e.preventDefault();
    const time = new Date(timerTime).getTime();
    const now = new Date().getTime();
    const diff = time - now;
  
    setTimeout(async () => {
      Notification.requestPermission().then(perm => {
        if (perm === 'granted') new Notification(`تذكير: ${timerName}`);
      });
      await fetch('http://localhost:5000/send-timer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'user-email@example.com', timerName, timerTime }), // استبدل ببريد المستخدم
      });
    }, diff);
  };