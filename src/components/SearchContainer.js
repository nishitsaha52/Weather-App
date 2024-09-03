// src/components/SearchContainer.js
import React, { useState, useEffect } from 'react';
import { FaSearch, FaStar, FaMicrophone } from 'react-icons/fa';
import ToggleButton from './ToggleButton';
import '../styles/SearchContainer.css';

const SearchContainer = ({ city, setCity, handleSearch, addFavorite, isListening, setIsListening, theme, setTheme, unit, handleToggle }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (city.length >= 3) {
      fetchSuggestions(city);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [city]);

  const fetchSuggestions = async (query) => {
    const accessToken = 'pk.eyJ1IjoibmlzaGl0NTIiLCJhIjoiY2xwNW80ZmYxMXY5ejJpcnAyNXRjb2MwZyJ9.p_XJ-byW34ZUMWYN45gmag'; // Replace with your actual Mapbox access token
    try {
      const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${accessToken}`);
      const data = await response.json();
      setSuggestions(data.features.map(feature => feature.place_name));
      setShowSuggestions(true);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    setSuggestions([]);
    setShowSuggestions(false);
    handleSearch();
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          setShowSuggestions(true);
        }}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="Enter city name"
        className="city-input"
      />
      <button onClick={handleSearch} className="button">
        <FaSearch /> Search
      </button>
      <button onClick={addFavorite} className="button">
        <FaStar /> Add to Favorites
      </button>
      <button
        onClick={() => setIsListening(!isListening)}
        className={`button ${isListening ? 'voice-active' : ''}`}
      >
        <FaMicrophone /> {isListening ? 'Stop Listening' : 'Voice Search'}
      </button>
      <ToggleButton theme={theme} setTheme={setTheme} unit={unit} onToggle={handleToggle} />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)} className="suggestion-item">
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchContainer;
