import React from 'react';
import '../StyleSheets/Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    
    return (    
        <>
        <div>
        <nav>
            <h1 className="logo">
                <span>Html Hooligans</span>
                </h1>
            <ul>
                <li>
                    <Link to ="/"><button>Home</button></Link>
                </li>
                
                <li>
                    <Link to = "/about"><button>About</button></Link>
                </li>
                
                <li>
                    <Link to = "/designs"><button>Designs</button></Link>
                </li>

                <li>
                    <Link to = "/test"><button>Landing</button></Link>
                </li>
            </ul>
        </nav>                
      </div>    
      </>    
    );
}

export default Navbar;