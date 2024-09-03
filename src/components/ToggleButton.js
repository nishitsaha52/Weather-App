import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ToggleButton.css';

const ToggleButton = ({ unit, onToggle, temperature, windSpeed }) => {
  const convertValues = () => {
    if (unit === 'metric') {
      const tempInFahrenheit = (temperature * 9 / 5) + 32;
      const windSpeedInMph = windSpeed * 2.237;
      return {
        temperature: tempInFahrenheit.toFixed(1),
        windSpeed: windSpeedInMph.toFixed(1)
      };
    } else {
      const tempInCelsius = (temperature - 32) * 5 / 9;
      const windSpeedInMps = windSpeed / 2.237;
      return {
        temperature: tempInCelsius.toFixed(1),
        windSpeed: windSpeedInMps.toFixed(1)
      };
    }
  };

  const handleToggle = (selectedUnit) => {
    if (typeof onToggle === 'function') {
      const convertedValues = convertValues();
      onToggle(selectedUnit, convertedValues);
    } else {
      console.error('onToggle is not a function');
    }
  };

  return (
    <div className="toggle-button-wrapper">
      <button
        className={`toggle-button ${unit === 'metric' ? 'active' : ''}`}
        onClick={() => handleToggle('metric')}
      >
        °C
      </button>
      <button
        className={`toggle-button ${unit === 'imperial' ? 'active' : ''}`}
        onClick={() => handleToggle('imperial')}
      >
        °F
      </button>
      <div className={`toggle-indicator ${unit === 'metric' ? 'metric' : 'imperial'}`}></div>
    </div>
  );
};

ToggleButton.propTypes = {
  unit: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  temperature: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
};

ToggleButton.defaultProps = {
  onToggle: () => {}, // Default no-op function
};

export default ToggleButton;
