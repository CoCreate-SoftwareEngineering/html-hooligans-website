import React from 'react';
import {motion as m} from 'framer-motion'

function Home() {
  return (
    <m.div className = "page"
    intial={{width: "100%", opacity: 1}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, opacity: 0}}
    >
      <h1>Designs</h1>
      <p>Insert Figma Designs for WebApp?</p>
    </m.div>
  );
}

export default Home;
