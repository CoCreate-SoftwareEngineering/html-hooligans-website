/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import '../StyleSheets/Contact.css';
import {motion as m} from 'framer-motion'
import EmployeeCard from '../Elements/EmployeeCard';
import MapContainer from '../Elements/Map';

// ToDo: 
// * * * add text to contact cards
// * * * add smooth beige to backgoun
// * * * try to disable some map options


function contact () {    
    return (
        <>
        {/* Container for google map location */}
        <div className='map-container' style={{ height: '400px', width: '400px', position: 'top'}}>
            <MapContainer />
        </div>
        
        {/* Grid Display for Contact Cards for Employees */}
        <div class="row" style={{marginRight: '50px', marginLeft: '113px', marginTop: '70px'}}>
            <div class="col-sm-6">
                <EmployeeCard />
            </div>
            <div class="col-sm-6">
                <EmployeeCard />
            </div>
            <div class="col-sm-6">
                <EmployeeCard />
            </div>
            <div class="col-sm-6">
                <EmployeeCard />
            </div>
            <div class="col-sm-6">
                <EmployeeCard />
            </div>
            <div class="col-sm-6">
                <EmployeeCard />
            </div>
        </div>
        </>
    );
}

export default contact;