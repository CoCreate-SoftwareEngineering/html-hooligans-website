import React from 'react';
import '../StyleSheets/Footer.css';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

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
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                    voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                    sequi voluptate quas.
                    </p>
                </section>

                </MDBContainer>
            </MDBFooter>
        </>        
    );
}

export default Footer;