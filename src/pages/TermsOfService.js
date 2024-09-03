import React from 'react';
import { FaHandshake, FaCheckCircle, FaUserShield, FaSyncAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-of-service-container">
      <h1 className="terms-of-service-title">Terms of Service</h1>
      <section className="terms-section">
        <h2 className="terms-heading">
          <FaHandshake className="terms-icon" /> Introduction
        </h2>
        <p className="terms-text">
          Welcome to WeatherWise. These Terms of Service govern your use of our application. By accessing or using WeatherWise, you agree to comply with and be bound by these terms.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-heading">
          <FaCheckCircle className="terms-icon" /> 1. Acceptance of Terms
        </h2>
        <p className="terms-text">
          By using our application, you accept and agree to these Terms of Service. If you do not agree with any part of these terms, you must not use our application.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-heading">
          <FaUserShield className="terms-icon" /> 2. Use of Our Service
        </h2>
        <p className="terms-text">
          You agree to use our application only for lawful purposes and in accordance with these terms. You are responsible for ensuring that your use of the application complies with all applicable laws and regulations.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-heading">
          <FaUserShield className="terms-icon" /> 3. User Accounts
        </h2>
        <p className="terms-text">
          To access certain features of our application, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-heading">
          <FaSyncAlt className="terms-icon" /> 4. Changes to Terms
        </h2>
        <p className="terms-text">
          We may update these Terms of Service from time to time. We will notify you of any changes by posting the new terms on our application. Your continued use of the application after such changes constitutes your acceptance of the new terms.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-heading">
          <FaEnvelope className="terms-icon" /> 5. Contact Us
        </h2>
        <p className="terms-text">
          If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@weatherwise.com" className="terms-link">support@weatherwise.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
