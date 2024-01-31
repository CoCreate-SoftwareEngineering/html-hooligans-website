// src/App.js

import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Elements/Footer';
import AnimatedRoutes from './Elements/AnimatedRoutes';
import Wrapper from './Elements/Wrapper';

function App() {  
  return (
    <div className="app-container">
    <Router>      
        
        <AnimatedRoutes />
        <Footer />      
    </Router>
    </div>
  );
}

export default App;
