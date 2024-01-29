/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import '../StyleSheets/Contact.css';
import {color, motion as m} from 'framer-motion'
import EmployeeCard from '../Elements/EmployeeCard';
import MapContainer from '../Elements/Map';

// ToDo: 
// * * * add smooth beige to backgoun
// * * * try to disable some map options


function Contact () {        
    return (
        <>
        
        <m.div className ="page"
      intial={{opacity: 1}}
      animate={{width: "100%"}}
      exit={{opacity: 0, transition: { duration: 2 }}}    
      >

        <div className='page'>
            {/* Container for google map location */}
            <div className='map-container' style={{ height: '400px', width: '400px', position: 'top'}}>
                <MapContainer />
            </div>
            
            <div className = 'contacts'>
            {/* Grid Display for Contact Cards for Employees */}
            <div class="row" style={{marginTop: '70px', paddingLeft: '260px'}}>
                
                <div class="col-sm-6">
                    <EmployeeCard 
                    cardTitle="Caera Young" 
                    cardText={
                        <ul style={{color: '#585353'}}>
                            <li>Skill in React and project planning</li>
                            <li>Team player with prior teamwork experience</li>
                            <li>UX/UI design expertise</li>
                            <p></p>
                            <p style={{color:'#585353'}}>Caera is a QA tester and backend developer with proficiencies in both React and project planning</p>
                        </ul>
                    }
                    email ="cly2000@hw.ac.uk"
                    />
                </div>
                
                <div class="col-sm-6">
                <EmployeeCard 
                    cardTitle="Kacper Gyns" 
                    cardText={
                        <ul style={{color: '#585353'}}>
                            <li>Team player with 3+ years of experience</li>
                            <li>Proficient in Node.js and full-stack development</li>
                            <li>Thrives under pressure</li>
                            <p></p>
                            <p style={{color:'#585353'}}>Kacper excels in teamwork and has a strong background in node.js and full-stack development</p>
                        </ul>
                    }
                    email ="kg2009@hw.ac.uk"
                    />
                </div>

                <div class="col-sm-6">
                    <EmployeeCard 
                    cardTitle="Matthew Mackinnon" 
                    cardText={
                        <ul style={{color: '#585353'}}>
                            <li>Skilled in coding and development</li>
                            <li>Proficient in both frontend and backend development</li>
                            <li>Experienced team member</li>
                            <p></p>
                            <p style={{color:'#585353'}}>Matthew is a seasoned developer who excels in both front and backend development.</p>
                        </ul>
                    }
                    email ="mm2088@hw.ac.uk"
                    />
                </div>            
                
                <div class="col-sm-6">
                <EmployeeCard 
                    cardTitle="Rohan Veit" 
                    cardText={
                        <ul style={{color: '#585353'}}>
                            <li>Experienced developer with coding Proficiency</li>
                            <li>Backend development specialist</li>
                            <li>Dedicated to quality assurance</li>
                            <p></p>
                            <p style={{color:'#585353'}}>Rohan is a seasoned backend developer with a commitment to quality assurance </p>
                        </ul>
                    }
                    email ="rv2009@hw.ac.uk"
                    />
                </div>
                
                <div class="col-sm-6">
                <EmployeeCard 
                    cardTitle="Sibila Shihab" 
                    cardText={
                        <ul style={{color: '#585353'}}>
                            <li>UX/UI design experience</li>
                            <li>Proficient in coding and backend development</li>
                            <li>Collaborative team player</li>
                            <p></p>
                            <p style={{color:'#585353'}}>Sibila is a talented UX/UI designer, team player and developer with prior backend experience</p>
                        </ul>
                    }
                    email ="ss2190@hw.ac.uk"
                    />
                </div>
                
                <div class="col-sm-6">
                <EmployeeCard 
                    cardTitle="Zack Brown" 
                    cardText={
                        <ul style={{color: '#585353'}}>
                            <li>Experienced in JavaScript and Node.js development</li>
                            <li>Experienced in both front-end and back-end development</li>
                            <li>Committed to delivering high-quality solutions</li>
                            <p></p>
                            <p style={{color: '#585353'}}> Zack is a skilled developer with prior experience in front and backend development.</p>
                        </ul>
                    }
                    email ="zb2007@hw.ac.uk"
                    />
                </div>

                <div class="col-sm-6 offset-sm-3">
                <EmployeeCard 
                    cardTitle="Sophie O'Hagan" 
                    cardText={
                        <ul style={{color: '#585353'}}>
                            <li>Team player with a focus on UX design</li>
                            <li>Strong organsational and management skills</li>
                            <li>Committed to delivering excellence</li>
                            <p></p>
                            <p style={{color: '#585353'}}> Sophie brings UX design experties and excellent organsational skills to the team.</p>
                        </ul>
                    }
                    email ="so2013@hw.ac.uk"
                    />
                </div>
            </div>
        </div>
        </div>
        </m.div>
        </>
    );
}

export default Contact;