import React from 'react';
import {motion as m} from 'framer-motion'

function Home() {
  return (
    <m.div className ="page"
    intial={{opacity: 1}}
    animate={{width: "100%"}}
    exit={{opacity: 0, transition: { duration: 2 }}}    
    >
      <h1>Designs</h1>
      <p>Insert Figma Designs for WebApp?</p>
    </m.div>
  );
}

export default Home;
