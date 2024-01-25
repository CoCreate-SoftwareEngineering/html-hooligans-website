import React from 'react';
import { Link } from 'react-router-dom';

function DesFeatures(props) {
     return (
          <>
               {/*Reusable card component for Home.js for users section*/}
               <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                         <div className="row g-0">
                              <div className="col-md-4">
                                   <img src={props.source} className="img-fluid rounded-start" alt={props.title + " feature user interface"} style={{ minHeight: "10rem", maxHeight: "10rem" }} />
                              </div>
                              <div className="col-md-8">
                                   <div className="card-body">
                                        <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text text-dark">Placeholder Text</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default DesFeatures;