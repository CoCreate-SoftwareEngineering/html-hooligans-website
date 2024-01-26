import React from 'react';

function EmployeeCard(){
    return (
        <>       
        {/* Repeatable Card
          * ToDo: make text changeable        
        */}
        <div class = "card w-75" style={{margin:'12px', maxWidth: '600px'}}>
            <div class = "card-body">
                <h5 class="card-title">Name</h5>
                <p class = "card-text" style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href = "#" class =" btn btn-primary">Contact Me</a>
            </div>
        </div>
        </>
    );
}

export default EmployeeCard;