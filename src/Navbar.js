import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    
    return (        
        <div>
        <nav>
            <h1 className="logo">
                <span>Html Hooligans</span>
                </h1>
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                
                <li>
                    <Link to = "/about">About </Link>
                </li>
                
                <li>
                    <Link to = "/designs">Designs</Link>
                </li>
            </ul>
        </nav>                
      </div>    
    );
}

export default Navbar;