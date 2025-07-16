// src/pages/Courses.js
import React from 'react';
import { Link } from 'react-router-dom'; // Add Link for navigation
import './Courses.css'; // Add some styling

function Courses() {
  return (
    <div className="courses-container">
      <header className="courses-header">
        <h1>Our Programming Courses</h1>
        <p>Explore our wide range of courses designed to take your skills to the next level. Whether you're just starting or looking to specialize in a particular field, we have something for you!</p>
      </header>

      <section className="course-category">
        <div className="course-card">
          <h2>Frontend Development</h2>
          <p>Learn how to build modern, responsive websites with the core web technologies.</p>
          <ul>
            <li>HTML: Building the structure of a website</li>
            <li>CSS: Styling websites and creating responsive layouts</li>
            <li>JavaScript: Adding interactivity and dynamic functionality</li>
            <li>React: Building modern, component-based web applications</li>
          </ul>
          <Link to="/frontend-courses">
            <button className="course-btn">Explore Frontend Courses</button>
          </Link>
        </div>
      </section>

      <section className="course-category">
        <div className="course-card">
          <h2>Full Stack Development</h2>
          <p>Become a full-stack developer by learning both frontend and backend technologies.</p>
          <ul>
            <li>Frontend Development (HTML, CSS, JavaScript, React)</li>
            <li>Backend Development (Node.js, Express.js, MongoDB, SQL)</li>
            <li>Building RESTful APIs and connecting to databases</li>
            <li>Deploying full-stack applications on cloud platforms</li>
          </ul>
          <Link to="/full-stack-courses">
            <button className="course-btn">Explore Full Stack Courses</button>
          </Link>
        </div>
      </section>

      <section className="course-category">
        <div className="course-card">
          <h2>Python Programming</h2>
          <p>Master Python, one of the most popular and versatile programming languages used in various domains like data science, automation, and web development.</p>
          <ul>
            <li>Basic Python Syntax and Concepts</li>
            <li>Object-Oriented Programming with Python</li>
            <li>Web Development with Django and Flask</li>
            <li>Data Science: NumPy, Pandas, and Matplotlib</li>
            <li>Automation and Scripting with Python</li>
          </ul>
          <Link to="/python-courses">
            <button className="course-btn">Explore Python Courses</button>
          </Link>
        </div>
      </section>

      <section className="course-category">
        <div className="course-card">
          <h2>Machine Learning and Deep Learning</h2>
          <p>Dive deep into the world of AI and learn how to build intelligent systems with machine learning and deep learning algorithms.</p>
          <ul>
            <li>Understanding Machine Learning Concepts (Supervised & Unsupervised Learning)</li>
            <li>Working with TensorFlow and PyTorch</li>
            <li>Building Neural Networks and Deep Learning Models</li>
            <li>Real-world Applications: Image Recognition, Natural Language Processing (NLP), etc.</li>
          </ul>
          <Link to="/ml-courses">
            <button className="course-btn">Explore ML Courses</button>
          </Link>
        </div>
      </section>

      <section className="course-category">
        <div className="course-card">
          <h2>Computer Vision</h2>
          <p>Learn how computers can interpret and understand visual information, enabling a wide range of applications like image recognition, object detection, and more.</p>
          <ul>
            <li>Image Processing with OpenCV</li>
            <li>Building Image Classification Models</li>
            <li>Object Detection and Tracking</li>
            <li>Deep Learning for Vision: Convolutional Neural Networks (CNNs)</li>
          </ul>
          <Link to="/computer-vision-courses">
            <button className="course-btn">Explore Vision Courses</button>
          </Link>
        </div>
      </section>

      <section className="course-category">
        <div className="course-card">
          <h2>Node.js Development</h2>
          <p>Build server-side applications using Node.js and Express, and learn how to create scalable and efficient web applications.</p>
          <ul>
            <li>Node.js Basics: Asynchronous programming, Events, Streams</li>
            <li>Express.js: Building web servers and APIs</li>
            <li>Working with Databases: MongoDB and SQL databases</li>
            <li>Real-time applications with Socket.IO</li>
          </ul>
          <Link to="/nodejs-courses">
            <button className="course-btn">Explore Node.js Courses</button>
          </Link>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Start Your Learning Journey?</h2>
        <p>Enroll in our courses today and start learning the skills you need to succeed in the tech industry!</p>
        <button>Get Started</button>
      </section>
    </div>
  );
}

export default Courses;
