import '../StyleSheets/Home.css';
import Showcase from '../Elements/Showcase';
import {motion as m } from 'framer-motion';

function Home() {
    return (      
      <m.div className ="page"
      intial={{width: "100%", opacity: 1}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, opacity: 0}}
      >      
        <Showcase />                    
        
      </m.div>      
    );
  }
  
  export default Home;
  