import React from 'react';
import '../StyleSheets/Navbar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
    
    return (    
        <>
    <Navbar sticky="top" expand="lg" className="blue">
      <Container>
        <h1 className="logo">
          <span>Html Hooligans</span>
        </h1>                        
          <Link to="/home"><Navbar.Brand><button>Home</button></Navbar.Brand></Link>
          <Link to="/about"><Navbar.Brand><button>About</button></Navbar.Brand></Link>
          <Link to="/designs"><Navbar.Brand><button>Designs</button></Navbar.Brand></Link>
          <Link to="/contact"><Navbar.Brand><button>Contact Us</button></Navbar.Brand></Link>
        
      </Container>
    </Navbar>
      </>    
    );
}

export default Nav;