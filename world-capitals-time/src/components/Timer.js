import React, { useState } from 'react';

const Timer = () => {
  const [timerName, setTimerName] = useState('');
  const [timerTime, setTimerTime] = useState('');

  const handleSetTimer = (e) => {
    e.preventDefault();
    const time = new Date(timerTime).getTime();
    const now = new Date().getTime();
    const diff = time - now;

    setTimeout(() => {
      Notification.requestPermission().then(perm => {
        if (perm === 'granted') new Notification(`تذكير: ${timerName}`);
      });
      alert(`تم تشغيل التذكير: ${timerName}`); // بديل مؤقت للبريد
    }, diff);
  };

  return (
    <form onSubmit={handleSetTimer}>
      <h3>إضافة مؤقت</h3>
      <input 
        type="text" 
        placeholder="اسم المؤقت" 
        value={timerName} 
        onChange={(e) => setTimerName(e.target.value)} 
        required 
      />
      <input 
        type="datetime-local" 
        value={timerTime} 
        onChange={(e) => setTimerTime(e.target.value)} 
        required 
      />
      <button type="submit">تعيين المؤقت</button>
    </form>
  );
};

export default Timer;