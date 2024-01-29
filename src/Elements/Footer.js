import React from 'react';
import '../StyleSheets/Footer.css';
import {
    MDBFooter,
    MDBContainer,    
    MDBInput,
    MDBCol,
    MDBRow,    
  } from 'mdb-react-ui-kit';
  import { Link } from 'react-router-dom';  

function Footer() {
    return (
        <>
            <MDBFooter className='text-center' color='white' bgColor='dark'>
                <MDBContainer className='p-4'>
                    <section className='mb-4'>
                        <p>html-hooligans 2024 © </p>
                    </section>

                <section className=''>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size="auto">
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter</strong>                                    
                                </p>
                            </MDBCol>

                            <MDBCol md='5' start>
                                <MDBInput contrast type='email' className='mb-4' />
                            </MDBCol>

                            <MDBCol size='auto'>
                                <button type='submit' className='btn btn-primary'>Subscribe</button>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>

                <section className='mb-4'>
                   <p style={{color: 'rgba(226, 133, 110, 0.6)'}}>Unleash Your Creativity with Co-Create, where innovators and creators converge. Explore our interactive web app designed to 
                   bring your ideas to life. Stay connected join our newsletter for exclusive insights. 
                   Together, let's shape the future of creativity.</p> 
                </section>

                <section className='mb-4'>
                    <Link to='/contact'>Contact Us</Link> 
                </section>

                </MDBContainer>
            </MDBFooter>
        </>        
    );
}

export default Footer;