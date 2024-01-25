import React from 'react';
import Home from '../Pages/Home'; // Import the Home component
import About from '../Pages/About';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Designs from '../Pages/Designs';
import Landing from '../Pages/Landing'
import Navbar from './Navbar';
import Footer from './Footer';

import {AnimatePresence} from 'framer-motion';
import { Nav } from 'react-bootstrap';

function AnimatedRoutes() {
    const location = useLocation();
    const disabledPath ='/test';
    return (
        <AnimatePresence>
        {location.pathname !== disabledPath && <Navbar />}                        
        <Routes location = {location} key = {location.pathname}>
        <Route path="/" element={<Home />} />       
        <Route path="/about" element={<About />} /> 
        <Route path="/designs" element={<Designs />} />
        <Route path="/test" element={<Landing />} />
        {/* Define other routes as needed */}
      </Routes>
      </AnimatePresence>
    );
            
}

export default AnimatedRoutes