import React from 'react';
import Home from '../Pages/Home'; // Import the Home component
import About from '../Pages/About';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Designs from '../Pages/Designs';
import Contact from '../Pages/Contact';
import Landing from '../Pages/Landing';
import Nav from './Nav';

import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    const disabledPath ='/';

    // disable ability to scroll on LandingPage
    if (location.pathname === disabledPath) {
      document.body.style.overflow = 'hidden';
  } else {
      document.body.style.overflow = '';
  }
    return (
        <AnimatePresence>

          {/* Disable NavBar on Landing page */}
        {location.pathname !== disabledPath && <Nav />}

        <Routes location = {location} key = {location.pathname}>
        <Route path="/" element={<Landing />} />       
        <Route path="/about" element={<About />} /> 
        <Route path="/designs" element={<Designs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        {/* Define other routes as needed */}
      </Routes>
      </AnimatePresence>
    );
            
}

export default AnimatedRoutes