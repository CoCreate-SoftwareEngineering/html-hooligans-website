import Showcase from '../Elements/Showcase';
import '../StyleSheets/Landing.css';
import {motion as m } from 'framer-motion';
import { useEffect } from 'react';
import Wrapper from '../Elements/Wrapper';
import { Link } from 'react-router-dom';

function Landing() {    
    return (     
    <>
    
      <m.div className ="page"
      intial={{opacity: 1}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, opacity: 0}}    
      >            
      <Wrapper backgroundColor="rgb(226, 133, 110)"> {/* Weird fix to set background colour */}
      
        <Showcase />                    
    
              
      
    <div className='bottomBar'>    
        <button type="button" class="btn btn-outline-primary custom-outline-primary">Primary</button>                
        
        <button type="button" class="btn btn-outline-primary custom-outline-primary">Primary</button>        
    </div>  
      
    </Wrapper>
        </m.div> 
    
    </>  
    );
  }
  
  export default Landing;
  