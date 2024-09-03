import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className={`header ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <div className="app-header">
        <Link to="/">
          <img src="/weather.svg" alt="WeatherWise Logo" className="logo" />
        </Link>
        <h1 className="app-title">WeatherWise</h1>
        <button className="theme-toggle-button" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />} 
          {theme === 'light' ? ' Dark' : ' Light'} Theme
        </button>
      </div>
    </header>
  );
};

export default Header;
