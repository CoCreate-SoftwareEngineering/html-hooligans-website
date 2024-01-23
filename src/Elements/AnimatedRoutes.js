import React from 'react';
import Home from '../Pages/Home'; // Import the Home component
import About from '../Pages/About';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Designs from '../Pages/Designs';

import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location = {location} key = {location.pathname}>
        <Route path="/" element={<Home />} />       
        <Route path="/about" element={<About />} /> 
        <Route path="/designs" element={<Designs />} />
        {/* Define other routes as needed */}
      </Routes>
      </AnimatePresence>
    );
            
}

export default AnimatedRoutes