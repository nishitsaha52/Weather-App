import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import moment from 'moment-timezone';
import {
  FaTemperatureHigh, FaTemperatureLow, FaWind, FaCloudShowersHeavy,
  FaTint, FaSnowflake, FaCloudMeatball, FaBinoculars, FaThermometerEmpty 
} from 'react-icons/fa';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import Favorites from '../components/Favorites';
import History from '../components/History';
import { MdOutlinePlace, MdOutlineCompress } from "react-icons/md";
import { WiHorizonAlt } from "react-icons/wi";
import { IoIosTimer } from "react-icons/io";
import Aqi from '../components/Aqi';
import Card from '../components/Card'
import Forecast from '../components/Forecast';
import WeatherTips from '../components/WeatherTips';
import SearchContainer from '../components/SearchContainer';
import '../styles/Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);
  const [theme, setTheme] = useState('light');
  const [isListening, setIsListening] = useState(false);
  const [aqiData, setAqiData] = useState(null);

  const API_KEY = "b5e9294461820eb134103b5f6ca134f9"; // Use environment variable for API key

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => fetchWeatherByCoords(position.coords.latitude, position.coords.longitude),
      () => setError('Unable to retrieve your location.')
    );
  }, [unit]);

  useEffect(() => {
    if (isListening) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setCity(transcript);
        handleSearch();
      };

      recognition.onend = () => setIsListening(false);

      recognition.start();
    }
  }, [isListening]);

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${unit}`);
      setWeatherData(response.data);
      setError(null);
      fetchAqi(response.data.coord.lat, response.data.coord.lon);
    } catch {
      setWeatherData(null);
      setAqiData(null);
      setError('City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`);
      setWeatherData(response.data);
      setError(null);
      fetchAqi(lat, lon);
      fetchForecast(response.data.name);
    } catch {
      setWeatherData(null);
      setAqiData(null);
      setError('Unable to retrieve weather data.');
    } finally {
      setLoading(false);
    }
  };

  const fetchForecast = async (cityName) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=${unit}`);
      setForecastData(response.data);
      setError(null);
    } catch {
      setForecastData(null);
      setError('City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchAqi = async (lat, lon) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
      setAqiData(response.data);
      setError(null);
    } catch {
      setAqiData(null);
      setError('Failed to fetch air quality data.');
    }
  };

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city.trim());
      fetchForecast(city.trim());
      setHistory([...history.slice(-9), city.trim()]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const addFavorite = () => {
    if (city.trim() && !favorites.includes(city.trim())) {
      setFavorites([...favorites, city.trim()]);
    }
  };

  const handleToggle = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);
    // Re-fetch weather data when the unit is changed
    if (weatherData) {
      fetchWeather(weatherData.name);
    }
  };

  const getWeatherIcon = (iconCode) => `http://openweathermap.org/img/wn/${iconCode}.png`;

  const getCurrentTimeInCity = () => {
    if (weatherData) {
      const timezone = weatherData.timezone;
      return moment().utcOffset(timezone / 60).format('YYYY-MM-DD HH:mm:ss');
    }
    return '';
  };

  const getDailyForecast = () => {
    if (!forecastData) return [];
    const dailyForecast = [];
    let currentDay = '';

    forecastData.list.forEach((item) => {
      const day = item.dt_txt.split(' ')[0];
      if (day !== currentDay) {
        dailyForecast.push(item);
        currentDay = day;
      }
    });
    return dailyForecast.slice(0, 7);
  };

  const dailyForecast = getDailyForecast();
  const isLightTheme = theme === 'light';

  return (
    <div className={`weather-app ${isLightTheme ? 'light-theme' : 'dark-theme'}`}>
      <SearchContainer
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
        addFavorite={addFavorite}
        isListening={isListening}
        setIsListening={setIsListening}
        theme={theme}
        setTheme={setTheme}
        unit={unit}
        handleToggle={handleToggle}
      />
      <div className="weather-section left-section">
        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        {weatherData && (
            <div className="weather-cards">
              <h1><WiHorizonAlt className="weather-icon"/>Weather Info</h1>
              <Card>
                <div className="grid-item">
                <div className="weather-header">
              <h2>
                <MdOutlinePlace /> {weatherData.name}, {weatherData.sys.country}
              </h2>
            </div>
                  <p>
                    <img src={getWeatherIcon(weatherData.weather[0].icon)} alt="Weather icon" />
                    {weatherData.weather[0].description.toUpperCase()}
                  </p>
                </div>
                <div className="grid-container">
                  <div className="grid-item">
                    <p>
                      <FaThermometerEmpty /> Temperature: {weatherData.main.temp}°{unit === 'metric' ? 'C' : 'F'}
                    </p>
                  </div>
                  <div className="grid-item">
                    <p>
                      <FaThermometerEmpty /> Feels Like: {weatherData.main.feels_like}°{unit === 'metric' ? 'C' : 'F'}
                    </p>
                  </div>
                  <div className="grid-item">
                    <p>
                      <FaTemperatureLow /> Minimum: {weatherData.main.temp_min}°{unit === 'metric' ? 'C' : 'F'}
                    </p>
                  </div>
                  <div className="grid-item">
                    <p>
                      <FaTemperatureHigh /> Maximum: {weatherData.main.temp_max}°{unit === 'metric' ? 'C' : 'F'}
                    </p>
                  </div>
                </div>
              </Card> 
              <Card icon={<FaWind />} title="Wind">
                <div className="grid-container">
                  <div className="grid-item">
                    <p>Wind Speed: {weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
                  </div>
                  <div className="grid-item">
                    <p>Wind Direction: {weatherData.wind.deg}°</p>
                  </div>
                </div>
              </Card> 
              <Card icon={<FaTint />} title="Humidity & More">
                <div className="grid-container">
                  <div className="grid-item">
                    <p><FaTint /> Humidity: {weatherData.main.humidity}%</p>
                  </div>
                  <div className="grid-item">
                    <p><MdOutlineCompress /> Pressure: {weatherData.main.pressure} hPa</p>
                  </div>
                  <div className="grid-item">
                    <p><FaCloudMeatball /> Clouds: {weatherData.clouds.all}%</p>
                  </div>
                  <div className="grid-item">
                    <p><FaBinoculars /> Visibility: {weatherData.visibility / 1000} km</p>
                  </div>
                  <div className="grid-item">
                    <p><FaCloudShowersHeavy /> Rain: {weatherData.rain ? weatherData.rain['1h'] : '0'} mm</p>
                  </div>
                  <div className="grid-item">
                    <p><FaSnowflake /> Snow: {weatherData.snow ? weatherData.snow['1h'] : '0'} mm</p>
                  </div>
                </div>
              </Card> 
              <Card icon={<FiSunrise />} title="Sunrise">
                <div className="grid-container">
                  <div className="grid-item">
                    <p><FiSunrise /> Sunrise: {moment.unix(weatherData.sys.sunrise).utcOffset(weatherData.timezone / 60).format('HH:mm')}</p>
                  </div>
                  <div className="grid-item">
                    <p><FiSunset /> Sunset: {moment.unix(weatherData.sys.sunset).utcOffset(weatherData.timezone / 60).format('HH:mm')}</p>
                  </div>
                </div>
              </Card>
              <h1><IoIosTimer /> Local Time: <div className="time-grid-container">
      {getCurrentTimeInCity()}
      </div></h1>   
            </div>
        )}
      </div> 
      <div className="weather-section right-section">
      <Forecast dailyForecast={dailyForecast} unit={unit} />
      
      </div>
      <WeatherTips weatherData={weatherData} />
      {aqiData && <Aqi aqiData={aqiData} />}
      <Favorites fetchWeather={fetchWeather} favorites={favorites} />
      <History fetchWeather={fetchWeather} history={history} />
    </div>
  );
};

export default Weather; 