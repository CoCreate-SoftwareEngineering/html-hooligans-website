import Showcase from '../Elements/Showcase';
import '../StyleSheets/Landing.css';
import {motion as m } from 'framer-motion';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function Landing() {
    return (     
    <>
      <m.div className ="page"
      intial={{opacity: 1}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, opacity: 0}}    
      >            
      
        <Showcase />                    
    
              
      
    <div className='bottomBar'>    
        <button type="button" class="btn btn-outline-primary custom-outline-primary">Primary</button>                
        <Link to ="/designs" className= "card-link my-4 mx-auto p-2" style={{ textAlign: "center" }}>Learn more →</Link>
        <button type="button" class="btn btn-outline-primary custom-outline-primary">Primary</button>        
    </div>  
      
    
    </m.div> 
    </>  
    );
  }
  
  export default Landing;
  