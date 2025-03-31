import React, { useState, useEffect } from 'react';
import Timer from './Timer';

const Dashboard = () => {
  const [location, setLocation] = useState('غير محدد');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation(`خط العرض: ${pos.coords.latitude}, خط الطول: ${pos.coords.longitude}`);
    });
  }, []);

  return (
    <div>
      <h2>لوحة التحكم</h2>
      <p>موقعك: {location}</p>
      <Timer />
      <button onClick={() => alert('تحديث المعلومات لاحقاً')}>تعديل المعلومات</button>
    </div>
  );
};

export default Dashboard;