// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Future Bright Infotech</h1>
        <p>Your trusted partner for programming courses, German language courses, and visa assistance services.</p>
      </header>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At Future Bright Infotech, we provide high-quality training in various programming technologies like 
          Frontend Development, Full Stack Development, Machine Learning, Deep Learning, and more. 
          We also offer specialized German Language Courses and Visa Assistance Services to help you achieve your 
          educational and career goals with ease.
        </p>
        <p>
          Our dedicated team of experts ensures that you receive the best learning experience through both offline and online sessions, 
          so you can learn at your own pace and convenience.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-item">
          <Link to="/courses">
            <h3>Programming Courses</h3>
            <p>
              We offer in-depth training in technologies like React, Node.js, Python, JavaScript, Machine Learning, and Full Stack Development. 
              Whether you're just starting or looking to enhance your skills, we have courses designed for all levels.
            </p>
          </Link>
        </div>

        <div className="service-item">
          <Link to="/Services">
            <h3>German Language Courses</h3>
            <p>
              Our German Language Courses are designed for students and professionals who wish to learn German for educational, 
              work, or travel purposes. Our expert trainers ensure that you gain fluency and confidence in both written and spoken German.
            </p>
          </Link>
        </div>

        <div className="service-item">
          <Link to="/Services">
            <h3>Visa Assistance</h3>
            <p>
              We specialize in offering visa assistance services, with a focus on accuracy and fast processing times. Whether you're 
              planning to study, work, or travel abroad, we help you navigate the visa process with ease.
            </p>
          </Link>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Experienced and certified trainers</li>
          <li>Comprehensive course material and resources</li>
          <li>Both offline and online learning options</li>
          <li>Hands-on training with real-world projects</li>
          <li>Personalized attention to each student's needs</li>
          <li>Fast and accurate visa assistance services</li>
        </ul>
      </section>

      <section className="call-to-action">
        <h2>Ready to Begin Your Journey?</h2>
        <p>Whether you're interested in learning programming, mastering a new language, or getting help with visa processing, Future Bright Infotech has got you covered.</p>
        <Link to="/contact">
          <button>Get Started Today</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
