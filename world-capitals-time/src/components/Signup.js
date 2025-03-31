import React from 'react';

const Signup = ({ setIsLoggedIn, setShowSignup }) => {
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
    if (res.ok) setIsLoggedIn(true); // عند النجاح في التسجيل
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>إنشاء حساب</h2>
      <input type="text" placeholder="الاسم الكامل" required />
      <input type="email" placeholder="البريد الإلكتروني" required />
      <input type="password" placeholder="كلمة المرور" required />
      <input type="password" placeholder="تأكيد كلمة المرور" required />
      <button type="submit">إنشاء الحساب</button>
      <button type="button" onClick={() => setShowSignup(false)}>تسجيل الدخول</button>
    </form>
  );
};

export default Signup;
