import React from 'react';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import '../styles/WeatherTips.css';

const WeatherTips = ({ weatherData }) => {
  const getWeatherTips = () => {
    if (!weatherData) {
      return ['Weather data is currently unavailable. Please check again later.'];
    }

    const temp = weatherData.main.temp;
    const humidity = weatherData.main.humidity; 
    const windSpeed = weatherData.wind.speed; 

    let tips = [];

    if (temp < 0) {
      tips.push('❄️ <strong>It\'s freezing outside!</strong> Ensure you’re bundled up with thermal layers and insulated outerwear.');
      tips.push('Check for ice patches if walking or driving, and clear frost from your car windows for better visibility.');
      tips.push('Consider hot beverages and warm meals to stay cozy.');
    } else if (temp < 15) {
      tips.push('🧥 <strong>It\'s quite chilly out.</strong> Layer up with a warm sweater, jacket, and don’t forget your gloves.');
      tips.push('Protect your extremities, especially if you’re spending time outdoors.');
      tips.push('A hot water bottle or heated blanket can add extra comfort at home.');
    } else if (temp < 25) {
      tips.push('🌤️ <strong>The weather is pleasantly mild.</strong> A light jacket or sweater will keep you comfortable.');
      tips.push('Great weather for a walk or a picnic, but stay hydrated, as even mild temperatures can be drying.');
      tips.push('Consider sunglasses if you’re out in the sun to protect your eyes from glare.');
    } else {
      tips.push('🌞 <strong>It\'s warm and sunny!</strong> Opt for light, breathable fabrics to stay cool.');
      tips.push('Stay hydrated throughout the day and apply sunscreen regularly to protect against UV rays.');
      tips.push('If you’re spending time outdoors, take breaks in the shade to avoid overheating.');
    }

    if (humidity > 80) {
      tips.push('🌬️ <strong>High humidity can make it feel hotter and more oppressive.</strong> Wear lightweight, moisture-wicking clothing to stay cool.');
      tips.push('Use fans or air conditioning to improve indoor air circulation and keep hydrated with cool fluids.');
      tips.push('Consider taking cooler showers or baths to refresh yourself throughout the day.');
    } else if (humidity < 20) {
      tips.push('💨 <strong>Low humidity can dry out your skin and respiratory system.</strong> Apply a rich moisturizer and keep a humidifier running indoors.');
      tips.push('Drink plenty of water to stay hydrated and avoid irritants like dry air or dusty environments.');
      tips.push('Consider using saline nasal sprays to keep your nasal passages hydrated.');
    }

    return tips;
  };

  return (
    <div className="weather-tips">
      <h1><MdOutlineTipsAndUpdates className="tips-icon" /> Weather Tips</h1>
      <ul>
        {getWeatherTips().map((tip, index) => (
          <li 
            key={index} 
            className="tip-item" 
            style={{ '--tip-index': index }} 
            dangerouslySetInnerHTML={{ __html: tip }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherTips;
