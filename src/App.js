// src/App.js

import React from 'react';
import { HashRouter , Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Elements/Footer';
import AnimatedRoutes from './Elements/AnimatedRoutes';
import Wrapper from './Elements/Wrapper';

function App() {  
  return (
    <div className="app-container">
    <HashRouter>      
        
        <AnimatedRoutes />
        <Footer />      
    </HashRouter>
    </div>
  );
}

export default App;
