import React from 'react';
import '../StyleSheets/Navbar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function Nav() {
    
    return (    
        <>
    <Navbar sticky="top" expand="lg" className="blue">
      <Container>
        <h1 className="logo">          
        <Link to ="/"><Image src="/Co_Create_Logo_blue.png" thumbnail style={{height: '45px'}} /></Link>
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