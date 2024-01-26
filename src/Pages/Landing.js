import Showcase from '../Elements/Showcase';
import '../StyleSheets/Landing.css';
import {motion as m } from 'framer-motion';
import Wrapper from '../Elements/Wrapper';
import { Link } from 'react-router-dom';


function Landing() {    
    return (     
    <>    
      <m.div className ="page"
      intial={{opacity: 1}}
      animate={{width: "100%"}}
      exit={{opacity: 0, transition: { duration: 2 }}}    
      >            
      <Wrapper backgroundColor="rgb(226, 133, 110)"> {/* Weird fix to set background colour */}
      
        {/* Splash Text  */}
        <Showcase />                    

{/* Organise Bottom Display of Landing Page */}
    <div className='bottomBar'>    
        <Link to="/home"><button type="button" class="btn btn-outline-primary custom-outline-primary">Explore</button></Link>
        <p className="center-text">Where creativity meets collaboration™ <Link to ="/designs">Learn More</Link></p>
        <Link to="/contact"><button type="button" class="btn btn-outline-primary custom-outline-primary">Contact Us</button></Link>        
    </div>  
      
    </Wrapper>
        </m.div> 
    
    </>  
    );
  }
  
  export default Landing;
  