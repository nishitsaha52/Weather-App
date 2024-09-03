import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success('Thank you! Your message has been sent.');
      console.log('Form submitted successfully:', formData);
      // Add your form submission logic here, e.g., sending data to an API

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      toast.error('Please fill out all required fields correctly.');
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-msg">
        <h1 className="contact-us-title">Contact Us</h1>
        <p className="contact-us-intro">
          We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
        </p>
        <div className="contact-info">
          <p className="contact-info-item">
            <strong>Email:</strong> <a href="mailto:support@weatherwise.com">support@weatherwise.com</a>
          </p>
          <p className="contact-info-item">
            <strong>Address:</strong> 123 Weather Lane, Suite 456, Weather City, WX 78901
          </p>
        </div>
        <div className="social-links">
          <h2 className="social-links-title">Follow Us</h2>
          <ul className="social-links-list">
            <li><a href="https://facebook.com/weatherwise" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebookF /> Facebook</a></li>
            <li><a href="https://twitter.com/weatherwise" target="_blank" rel="noopener noreferrer" className="social-link"><FaTwitter /> Twitter</a></li>
            <li><a href="https://instagram.com/weatherwise" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /> Instagram</a></li>
            <li><a href="https://linkedin.com/company/weatherwise" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedinIn /> LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <h2 className="contact-form-title">Send Us a Message</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className={`contact-form-input ${errors.name && 'is-invalid'}`}
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <div className="error-message">{errors.name}</div>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`contact-form-input ${errors.email && 'is-invalid'}`}
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <div className="error-message">{errors.email}</div>}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          className={`contact-form-textarea ${errors.message && 'is-invalid'}`}
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message && <div className="error-message">{errors.message}</div>}

        <button type="submit" className="contact-form-button">Send Message</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
