import React from 'react';
import '../styles/Card.css'; // Import card-specific styles

const Card = ({ icon, title, children }) => {
  return (
    <div className="card">
      <div className="card-icon">
        {icon}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Card;
