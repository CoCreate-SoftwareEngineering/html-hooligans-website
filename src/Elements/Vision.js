import React from 'react';
function Vision(props) {
          return (
               <>
               {/*Reusable card component for Home.js for vision section */}
                    <div className="col-sm-6 mb-3 mb-sm-0">
                         <div className="card mx-auto p-2 my-3 bg-secondary border-secondary" style={{minHeight:"13rem", maxWidth:"35rem"}}>
                              <div className="card-body">
                              <h5 className="card-title text-light">{props.title}</h5>
                              <p className="card-text text-light">{props.text}</p>
                              </div>
                         </div>
                    </div>
               </>
          );
}

export default Vision;