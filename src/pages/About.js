// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';  // Add Link for navigation
import './About.css';  // Add some styling

function About() {
  return (
    <div className="about-container">
      <header className="about-hero">
        <h1>About Future Bright Infotech</h1>
        <p>Your trusted partner for education, programming training, and professional services.</p>
      </header>

      <section className="mission">
        <h2>Our Mission</h2>
        <div className="card">
          <p>
            At Future Bright Infotech, our mission is to provide high-quality education in emerging technologies, 
            with a special focus on programming, full-stack development, and advanced courses like Machine Learning, 
            Deep Learning, and Computer Vision. We aim to empower individuals and professionals to build the skills 
            necessary to succeed in the rapidly evolving tech industry.
          </p>
        </div>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <div className="card">
          <p>
            Our vision is to be a global leader in tech education and professional training, providing individuals 
            with the skills, knowledge, and confidence they need to succeed in their careers. We strive to bridge the 
            gap between education and industry, ensuring that our students are equipped with practical, real-world skills.
          </p>
        </div>
      </section>

      <section className="values">
        <h2>Our Core Values</h2>
        <div className="card">
          <ul>
            <li><strong>Quality Education:</strong> We focus on providing top-notch education with up-to-date resources and expert trainers.</li>
            <li><strong>Innovation:</strong> We embrace the latest technologies and teaching methods to ensure our courses are relevant and effective.</li>
            <li><strong>Student-Centric:</strong> Our students' success is our top priority, and we provide personalized attention to help them excel.</li>
            <li><strong>Integrity:</strong> We operate with the highest level of professionalism and honesty, ensuring a transparent and ethical approach in everything we do.</li>
            <li><strong>Global Impact:</strong> We aim to make a positive impact globally by providing educational opportunities to students worldwide.</li>
          </ul>
        </div>
      </section>

      <section className="our-team">
        <h2>Meet Our Team</h2>
        <p>
          Our dedicated team consists of experienced educators, industry professionals, and passionate trainers 
          who are committed to delivering the best learning experience. They bring their expertise and real-world experience 
          to the classroom, helping students develop practical skills for the modern job market.
        </p>

        <div className="team-card">
          <h3>Saravana Kumanan - Founder & CEO</h3>
          <p>Saravanan is a tech entrepreneur with over 10 years of experience in the software development and training industry. His passion for education drives the core mission of Future Bright Infotech.</p>
        </div>
        
        <div className="team-card">
          <h3>Abith Raj - Lead Trainer </h3>
          <p>Abith is an expert in Machine Learning and Artificial Intelligence, with a background in academia and industry. He is committed to making complex topics accessible to students of all levels.</p>
        </div>
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like more information about our courses, please feel free to contact us:</p>
        <ul>
          <li>Email: info@futurebrightinfotech.com</li>
          <li>Phone: +91 8939222702</li>
          <li>Location: Workbazzr, Egmore, Chennai, India</li>
        </ul>
        <Link to="/contact">
          <button>Get in Touch</button>
        </Link>
      </section>
    </div>
  );
}

export default About;
