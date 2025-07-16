// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Add styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (could integrate with a backend service or email service)
    alert('Thank you for reaching out!');
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Reach out to us for any queries or assistance.</p>
      </header>

      <section className="contact-details">
        <h2>Our Location</h2>
        <p><strong>Location:</strong> Workbazzr, Egmore, Chennai, India</p>
        <p><strong>Email:</strong> info@futurebrightinfotech.com</p>
        <p><strong>Phone:</strong> +918939222702</p>
        
        {/* You can integrate Google Maps or a similar service here */}
        <div className="map-container">
          <h3>Find Us on the Map</h3>
          <iframe
            title="Google Map"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2494081690056!2d80.20912459999998!3d13.083373600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265827cc02bd3%3A0x95476a84c2052899!2sFuture%20Bright%20Infotech!5e0!3m2!1sen!2sin!4v1741715701493!5m2!1sen!2sin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
