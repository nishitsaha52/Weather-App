import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Weather from './pages/Weather';
import Favorites from './components/Favorites';
import History from './components/History';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';
import Preloader from './components/Pre'
import './App.css'; // Global styles

const App = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  const [theme, setTheme] = useState('light'); // Default to light theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      {loading ? <Preloader /> : (
      <div className="app-body">
      <div className={`app-container ${theme}-theme`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Weather theme={theme} />} />
            <Route path="/favorites" element={<Favorites theme={theme} />} />
            <Route path="/history" element={<History theme={theme} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy theme={theme} />} />
            <Route path="/terms-of-service" element={<TermsOfService theme={theme} />} />
            <Route path="/contact" element={<ContactUs theme={theme} />} />
          </Routes>
        </main>
        <Footer theme={theme} />
      </div>
      </div>
      )}
    </Router>
  );
};

export default App;
