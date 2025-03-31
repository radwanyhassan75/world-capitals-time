import React, { useState, useEffect } from 'react';

const CapitalCard = ({ capital }) => {
  const [time, setTime] = useState(new Date().toLocaleString('ar', { timeZone: capital.timezone }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString('ar', { timeZone: capital.timezone }));
    }, 1000);
    return () => clearInterval(interval);
  }, [capital.timezone]);

  return (
    <div className="capital-card">
      <img src={capital.image} alt={capital.name} />
      <h3>{capital.name}</h3>
      <p>الساعة: {time}</p>
    </div>
  );
};

export default CapitalCard;