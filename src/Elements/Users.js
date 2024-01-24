import React from 'react';
import { Link } from 'react-router-dom';

function Users(props) {
          return (
                    <>
                    {/*Reusable card component for Home.js for users section*/}
                    <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card mx-auto p-2 my-3" style={{maxWidth:"30rem"}}>
                         <h5 class="card-header">For {props.title}</h5>
                         <div class="card-body">
                              <p class="card-text">{props.text}</p> 
                              <Link to ="/about" className= "btn btn-secondary">→</Link>                             
                         </div>
                    </div>
                    </div>
                    </>
          );
}

export default Users;