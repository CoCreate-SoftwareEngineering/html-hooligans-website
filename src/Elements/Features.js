import React from 'react';
function Features(props) {
          return (
                    <>
                    {/*Reusable card component for Home.js for features section*/}
                    <div className="col-sm-6 my-4" style={{ maxWidth: "20rem" }}>
                              <div className="card bg-dark">
                                   <div className="card-body">
                                        <h5 className="card-title text-light" style={{ textAlign: "center" }}>{props.title}</h5>
                                   </div>
                              </div>
                         </div>
                    </>
          );
}

export default Features;