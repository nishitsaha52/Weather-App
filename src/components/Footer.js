import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLock, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = ({ theme, toggleTheme }) => {
  return (
    <footer className={`footer ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <div className="app-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} WeatherWise. All rights reserved.</p>
          <nav className="footer-nav">
            <Link to="/privacy-policy">
              <FaLock className="footer-icon" />
              Privacy Policy
            </Link>
            <Link to="/terms-of-service">
              <FaFileAlt className="footer-icon" />
              Terms of Service
            </Link>
            <Link to="/contact">
              <FaEnvelope className="footer-icon" />
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
