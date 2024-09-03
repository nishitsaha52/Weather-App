import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import '../styles/FavHis.css';

const Favorites = ({ favorites = [], fetchWeather }) => {
  const handleFetchWeather = (city) => {
    if (typeof fetchWeather === 'function') {
      fetchWeather(city);
    } else {
      console.error("fetchWeather is not a function");
    }
  };

  return (
    <div className="weather-section favorites-section">
      <h1><FaRegHeart className="favhis-icon"/>Favorites</h1>
      <div className="card-container">
        {favorites.map((favCity, index) => (
          <div
            key={index}
            className="favorites-card"
            onClick={() => handleFetchWeather(favCity)}
          >
            <h3>{favCity}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
