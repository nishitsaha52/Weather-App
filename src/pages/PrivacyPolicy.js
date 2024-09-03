import React from 'react';
import { FaInfoCircle, FaDatabase, FaShareAlt, FaShieldAlt, FaLock, FaSyncAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <section className="privacy-section">
        <h2 className="privacy-heading">
          <FaInfoCircle className="privacy-icon" /> Introduction
        </h2>
        <p className="privacy-text">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application. By using our app, you agree to the collection and use of information in accordance with this policy.
        </p>
      </section>
      <section className="privacy-section">
        <h2 className="privacy-heading">
          <FaDatabase className="privacy-icon" /> 1. Information We Collect
        </h2>
        <p className="privacy-text">
          We collect various types of information in connection with your use of our application, including:
        </p>
        <ul className="privacy-list">
          <li><strong>Personal Information:</strong> Information you provide directly, such as your name, email address, and other contact details.</li>
          <li><strong>Usage Data:</strong> Data on how you interact with our application, including your IP address, browser type, and usage patterns.</li>
          <li><strong>Location Data:</strong> Information about your geographic location, which we may use to provide localized weather information.</li>
        </ul>
      </section>
      <section className="privacy-section">
        <h2 className="privacy-heading">
          <FaShareAlt className="privacy-icon" /> 2. How We Use Your Information
        </h2>
        <p className="privacy-text">
          We use the collected information to:
        </p>
        <ul className="privacy-list">
          <li>Provide, maintain, and improve our application.</li>
          <li>Analyze usage and trends to enhance user experience.</li>
          <li>Send you updates, promotional materials, and other communications related to the app.</li>
        </ul>
      </section>
      <section className="privacy-section">
        <h2 className="privacy-heading">
          <FaShieldAlt className="privacy-icon" /> 3. How We Share Your Information
        </h2>
        <p className="privacy-text">
          We may share your information with:
        </p>
        <ul className="privacy-list">
          <li><strong>Service Providers:</strong> Third parties that assist us in operating and maintaining our application.</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and interests.</li>
        </ul>
      </section>
      <section className="privacy-section">
        <h2 className="privacy-heading">
          <FaLock className="privacy-icon" /> 4. Your Rights and Choices
        </h2>
        <p className="privacy-text">
          You have the right to:
        </p>
        <ul className="privacy-list">
          <li>Access, update, or delete your personal information.</li>
          <li>Opt-out of receiving promotional communications from us.</li>
          <li>Control how your information is used for location-based services.</li>
        </ul>
      </section>
      <section className="privacy-section">
        <h2 className="privacy-heading">
          <FaShieldAlt className="privacy-icon" /> 5. Security of Your Information
        </h2>
        <p className="privacy-text">
          We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>
      </section>
      <section className="privacy-section">
        <h2 className="privacy-heading">
          <FaSyncAlt className="privacy-icon" /> 6. Changes to This Privacy Policy
        </h2>
        <p className="privacy-text">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this policy periodically for any changes.
        </p>
      </section>
      <section className="privacy-section">
        <h2 className="privacy-heading">
          <FaEnvelope className="privacy-icon" /> 7. Contact Us
        </h2>
        <p className="privacy-text">
          If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@weatherwise.com" className="privacy-link">support@weatherwise.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
