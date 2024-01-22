import './Home.css';
import Navbar from '../src/Navbar';
import Showcase from '../src/Showcase';
import About from '../src/About';
import Footer from '../src/Footer';
import Designs from '../src/Designs'

function Home() {
    return (      
      <div className ="app-container">        
        <Showcase />          
        <Footer />
      </div>      
    );
  }
  
  export default Home;
  