import React from 'react';
import { Link } from 'react-router-dom';

function Users(props) {
          return (
                    <>
                    {/*Reusable card component for Home.js for users section*/}
                     
                    <div className="col-sm-6 my-4 mx-auto p-2" style={{ maxWidth: "13rem" }}>
                              <div className="card bg-light border-light" >
                              <h5 class="card-header bg-light">For {props.title}</h5>
                                   <div className="card-body">
                                   <Link to ="/about" className= "btn btn-secondary">→</Link> 
                                   </div>
                              </div>
                         </div>
                    </>
          );
}

export default Users;