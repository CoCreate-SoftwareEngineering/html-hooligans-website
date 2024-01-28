import React from 'react';

function AboutCard(props) {
     return (
          <>
               {/*Reusable card component for Home.js for users section*/}
               <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card mx-auto my-3 bg-primary border-light" style={{ maxWidth: "25rem", minHeight:"250px"}}>
                         <h5 className="card-header bg-secondary border-secondary text-light">For {props.title}</h5>
                         <div className="card-body">
                              <p className="card-text text-dark mt-3">{props.text}</p>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default AboutCard;