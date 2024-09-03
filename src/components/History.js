import React from 'react';
import { MdManageHistory } from "react-icons/md";
import '../styles/FavHis.css';

const History = ({ history = [], fetchWeather }) => {
  const handleFetchWeather = (city) => {
    if (typeof fetchWeather === 'function') {
      fetchWeather(city);
    } else {
      console.error("fetchWeather is not a function");
    }
  };

  return (
    <div className="weather-section history-section">
      <h1><MdManageHistory className="favhis-icon"/>Search History</h1>
      <div className="card-container">
        {history.map((histCity, index) => (
          <div
            key={index}
            className="history-card"
            onClick={() => handleFetchWeather(histCity)}
          >
            <h3>{histCity}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
