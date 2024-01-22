// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Elements/Navbar';
import Home from './Pages/Home'; // Import the Home component
import About from './Pages/About';
import Designs from './Pages/Designs';
import Footer from './Elements/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />       
          <Route path="/about" element={<About />} /> 
          <Route path="/designs" element={<Designs />} />
          {/* Define other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
