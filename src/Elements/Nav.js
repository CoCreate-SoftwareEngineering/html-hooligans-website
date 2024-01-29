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
      <span className="logo">
        <img src={process.env.PUBLIC_URL + '/Pictures/logo.png'} style={{maxWidth:"250px"}} />
        </span>       
          <Link to="/home"><Navbar.Brand><button>Home</button></Navbar.Brand></Link>
          <Link to="/about"><Navbar.Brand><button>About</button></Navbar.Brand></Link>
          <Link to="/designs"><Navbar.Brand><button>Products</button></Navbar.Brand></Link>
          <Link to="/contact"><Navbar.Brand><button>Contact Us</button></Navbar.Brand></Link>
        
      </Container>
    </Navbar>
      </>    
    );
}

export default Nav;