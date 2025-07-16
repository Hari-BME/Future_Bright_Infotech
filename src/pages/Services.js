// src/pages/Services.js
import React from 'react';
import './Services.css'; // Add styling

function Services() {
  return (
    <div className="services-container">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>At Future Bright Infotech, we offer a wide range of services tailored to meet your personal and professional needs. Our specialized services ensure you get the best results in your learning journey and career aspirations.</p>
      </header>

      {/* Course Teaching Services Section */}
      <section className="service-card">
        <h2>Course Teaching Services</h2>
        <p>We offer a wide range of technical courses designed to equip you with the skills needed for the ever-evolving tech industry. Whether you are a beginner or looking to upgrade your skills, we have a course for you!</p>
        <ul>
          <li>Frontend Development: HTML, CSS, JavaScript, React</li>
          <li>Full Stack Development: Frontend + Backend (Node.js, Express.js, MongoDB, SQL)</li>
          <li>Python Programming for Data Science and Web Development</li>
          <li>Machine Learning and Deep Learning</li>
          <li>Computer Vision</li>
          <li>Node.js Development</li>
        </ul>
        <div className="cta">
          <h3>Ready to Upgrade Your Skills?</h3>
          <p>Enroll in our courses today and start your journey towards a successful career in tech!</p>
          <button>Get Started</button>
        </div>
      </section>

      {/* German Language Courses Section */}
      <section className="service-card">
        <h2>German Language Courses</h2>
        <p>We offer comprehensive German language courses that cater to different levels, from beginner to advanced. Our courses are designed to help you master the German language efficiently and effectively.</p>
        <ul>
          <li>Certified Trainers with industry experience</li>
          <li>Flexible learning options (Offline and Online)</li>
          <li>In-depth grammar and vocabulary training</li>
          <li>Preparation for official exams (A1, A2, B1, B2, C1)</li>
          <li>Interactive learning modules for speaking, reading, writing, and listening</li>
        </ul>
        <div className="cta">
          <h3>Ready to Master German?</h3>
          <p>Start learning today and unlock new opportunities in Germany and across Europe.</p>
          <button>Get Started</button>
        </div>
      </section>

      {/* Visa Assistance Services Section */}
      <section className="service-card">
        <h2>Visa Assistance Services</h2>
        <p>We offer expert visa assistance services, specializing in providing guidance and support for students and professionals looking to study or work abroad. Our goal is to make the visa application process smoother, faster, and more efficient.</p>
        <ul>
          <li>Personalized Visa Consultation</li>
          <li>Assistance with application forms and documentation</li>
          <li>Interview preparation and mock sessions</li>
          <li>Focusing on accuracy, speed, and the highest success rates</li>
          <li>Guidance on Visa interview processes and requirements</li>
        </ul>
        <div className="cta">
          <h3>Need Visa Assistance?</h3>
          <p>Our expert team is here to help you get your visa application approved with ease. Start today and make your dreams of studying or working abroad a reality!</p>
          <button>Contact Us</button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-final">
        <h2>Why Choose Us?</h2>
        <p>We are committed to delivering top-quality services with a focus on your success. Whether you're learning a new language, applying for a visa, or advancing your career with tech courses, we are here to support you every step of the way.</p>
        <button>Learn More</button>
      </section>
    </div>
  );
}

export default Services;
