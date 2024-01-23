import '../StyleSheets/Home.css';
import Navbar from '../Elements/Navbar';
import Showcase from '../Elements/Showcase';
import About from './About';
import Footer from '../Elements/Footer';
import Designs from './Designs'
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
  