// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Elements/Navbar';
import Home from './Pages/Home'; // Import the Home component
import About from './Pages/About';
import Designs from './Pages/Designs';
import Footer from './Elements/Footer';
import AnimatedRoutes from './Elements/AnimatedRoutes';

function App() {  
  return (
    <div className="app-container">
    <Router>      
        <Navbar />
        <AnimatedRoutes />
        <Footer />      
    </Router>
    </div>
  );
}

export default App;
