import React from 'react';
import '../StyleSheets/About.css';
import {motion as m} from 'framer-motion'

function About() {
    return (
        <m.div className = "page"
        intial={{width: "100%", opacity: 1}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth, opacity: 0}}
        >
            <h2>About Us</h2>
            <p>This is a placeholder section</p>
        </m.div>
    );
}

export default About;