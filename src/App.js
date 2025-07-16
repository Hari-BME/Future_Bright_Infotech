// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Use Routes instead of Switch
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Services from './pages/Services';

// import FrontendCourses from './pages/FrontendCourses';
// import FullStackCourses from './pages/FullStackCourses';
// import PythonCourses from './pages/PythonCourses';
// import MlCourses from './pages/MlCourses';
// import VisionCourses from './pages/VisionCourses';
// import NodeJsCourses from './pages/NodeJsCourses';

import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes> {/* Switch is replaced with Routes */}
          <Route path="/" element={<Home />} /> {/* Use element prop */}
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
