// src/components/Forecast.js
import React from 'react';
import moment from 'moment';
import { FaTemperatureHigh, FaTemperatureLow, FaCloudShowersHeavy, FaCloudSunRain } from 'react-icons/fa';
import '../styles/Forecast.css'; // Ensure you create this file for styles

const Forecast = ({ dailyForecast, unit }) => {
  return (
    <div className="forecast">
      <h1><FaCloudSunRain className="forecast-icon"/>Forecast</h1>
      {dailyForecast.length > 0 ? (
        dailyForecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>{moment(day.dt_txt).format('dddd')}</p>
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="Weather icon" />
            <p>
              <FaTemperatureHigh /> Max Temp: {day.main.temp_max}°{unit === 'metric' ? 'C' : 'F'}
            </p>
            <p>
              <FaTemperatureLow /> Min Temp: {day.main.temp_min}°{unit === 'metric' ? 'C' : 'F'}
            </p>
            <p><FaCloudShowersHeavy /> Rain: {day.rain ? day.rain['3h'] : '0'} mm</p>
          </div>
        ))
      ) : (
        <p>No forecast data available.</p>
      )}
    </div>
  );
};

export default Forecast;
