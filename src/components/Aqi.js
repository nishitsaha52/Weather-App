import React, { useEffect } from 'react';
import { FaCloud, FaExclamationTriangle, FaCloudShowersHeavy } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';
import { SiDoxygen } from 'react-icons/si';
import { FaTint, FaWind, FaSmog } from 'react-icons/fa';
import { BiLeaf } from "react-icons/bi";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file
import '../styles/Aqi.css'; // Import your custom CSS file

const Aqi = ({ aqiData }) => {
  useEffect(() => {
    if (aqiData) {
      const aqi = aqiData.list[0].main.aqi;
      switch (true) {
        case aqi <= 1:
          toast.success('Air quality is Good. Enjoy your day!', { position: 'top-center' ,  width: '100px' });
          break;
        case aqi <= 2:
          toast.info('Air quality is Moderate. People with respiratory issues may want to limit prolonged outdoor exertion.', { position: 'top-center',  width: '200px' });
          break;
        case aqi <= 3:
          toast.warn('Air quality is Unhealthy for Sensitive Groups. People with respiratory conditions should avoid prolonged outdoor exertion.', { position: 'top-center' ,  width: '200px'});
          break;
        case aqi <= 4:
          toast.warn('Air quality is Unhealthy. Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.', { position: 'top-center' ,  width: '200px'});
          break;
        case aqi <= 5:
          toast.error('Air quality is Very Unhealthy. Health alert: everyone may experience more serious health effects.', { position: 'top-center' ,  width: '200px'});
          break;
        case aqi <= 6:
          toast.error('Air quality is Hazardous. Health warnings of emergency conditions. The entire population is more likely to be affected.', { position: 'top-center' ,  width: '200px'});
          break;
        default:
          toast.error('Air quality data is not available.', { position: 'top-center',  width: '200px' });
          break;
      }
    }
  }, [aqiData]);

  const getAqiDescription = (aqi) => {
    if (aqi <= 1) return 'Good';
    if (aqi <= 2) return 'Moderate';
    if (aqi <= 3) return 'Unhealthy for Sensitive Groups';
    if (aqi <= 4) return 'Unhealthy';
    if (aqi <= 5) return 'Very Unhealthy';
    if (aqi <= 6) return 'Hazardous';
    return 'Very Hazardous';
  };

  const getAqiBackgroundColor = (aqi) => {
    if (aqi <= 1) return '#00E400';
    if (aqi <= 2) return '#FFFF00';
    if (aqi <= 3) return '#FF7E00';
    if (aqi <= 4) return '#FF0000';
    if (aqi <= 5) return '#8F3F3F';
    if (aqi <= 6) return '#4F0C0C';
    return '#4F0C0C';
  };

  const getTextColorForBackground = (backgroundColor) => {
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#000000' : '#FFFFFF';
  };

  const getAqiIcon = (aqi) => {
    if (aqi <= 1) return <FaCloud />;
    if (aqi <= 2) return <FaCloud />;
    if (aqi <= 3) return <FaExclamationTriangle />;
    if (aqi <= 4) return <FaExclamationTriangle />;
    if (aqi <= 5) return <FaExclamationTriangle />;
    return <FaCloudShowersHeavy />;
  };

  if (!aqiData) return null;

  const aqi = aqiData.list[0].main.aqi;
  const backgroundColor = getAqiBackgroundColor(aqi);
  const textColor = getTextColorForBackground(backgroundColor);

  return (
    <div className="aqi-container">
      <h1><BiLeaf className="aqi-icon"/>Air Quality Index</h1>
      <div
        className="aqi-info"
        style={{
          backgroundColor,
          color: textColor,
        }}
      >
        <h1>{getAqiIcon(aqi)}</h1>
        <h2>Current AQI: {aqi}</h2>
        <p>{getAqiDescription(aqi) }</p>
        <div className="grid-container">
          <div className="grid-item"><p><FaSmog /> PM2.5: {aqiData.list[0].components.pm2_5} µg/m³</p></div>
          <div className="grid-item"><p><FaTint /> PM10: {aqiData.list[0].components.pm10} µg/m³</p></div>
          <div className="grid-item"><p><GiWaterDrop /> O3: {aqiData.list[0].components.o3} µg/m³</p></div>
          <div className="grid-item"><p><SiDoxygen /> NO2: {aqiData.list[0].components.no2} µg/m³</p></div>
          <div className="grid-item"><p><FaTint /> SO2: {aqiData.list[0].components.so2} µg/m³</p></div>
          <div className="grid-item"><p><FaWind /> CO: {aqiData.list[0].components.co} µg/m³</p></div>
        </div>
      </div>
      <ToastContainer className="custom-toast-container" />
    </div>
  );
};

export default Aqi;
