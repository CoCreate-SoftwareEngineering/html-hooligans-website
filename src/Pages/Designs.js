import React from 'react';
import DesFeatures from '../Elements/DesFeatures';
import { Link } from 'react-router-dom';
import {motion as m} from 'framer-motion';

function Designs() {
     return (
          <>
           <m.div className = "page"
        intial={{opacity: 1, transition: {duration: 2}}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth, opacity: 0}}
        >
               <div className="container my-4">
                    <h3 className="text-dark">Products</h3>
               </div>
               <div className="container">
                    <div className="row my-5">
                         <h5>CoCreate</h5>
                         <p className="text-info">---- Placeholder text---- CoCreate is an online collaboraive space where people can interact and work together to organize, annotate, share, and create ideas.
                              We have created a platform with all the features that you would need to collaborate, all in the same app!
                              The app can be used by anyone, from students to professionals, to collaborate on projects, assignments, and more.
                              It has extensive audio and video call capabilities and integrates Microsoft Office tools to help a seamless collaboration experience.
                              The projects can also utilize the in-built whiteboard feature and document editor to help you create and share ideas.
                         </p>
                    </div>
               </div>

               <div className="container">
                    <h5 className="text-dark">Features of CoCreate</h5>
                    <div className="row mx-auto p-2 my-4">
                         <DesFeatures title="Call" text="" source={process.env.PUBLIC_URL + '/Pictures/audio call.png'} />
                         <DesFeatures title="Chat" text="" source={process.env.PUBLIC_URL + '/Pictures/chat.png'} />
                    </div>
                    <div className="row mx-auto p-2">
                         <DesFeatures title="Collaborate" text="" source={process.env.PUBLIC_URL + '/Pictures/collaborate.png'} />
                         <DesFeatures title="Create" text="" source={process.env.PUBLIC_URL + '/Pictures/create.png'} />
                    </div>
                    <div className="row mx-auto p-2">
                         <DesFeatures title="Calendar" text="" source={process.env.PUBLIC_URL + '/Pictures/calendar.png'} />
                         <DesFeatures title="Whiteboard" text="" source={process.env.PUBLIC_URL + '/Pictures/whiteboard.png'} />
                    </div>
                    <div className="row mx-auto p-2">
                         <DesFeatures title="Watch Creators" text="" source={process.env.PUBLIC_URL + '/Pictures/watch live.png'} />
                         <DesFeatures title="Write" text="" source={process.env.PUBLIC_URL + '/Pictures/write doc.png'} />
                    </div>
                    <div className="row mx-auto p-2">
                         <DesFeatures title="Draw" text="" source={process.env.PUBLIC_URL + '/Pictures/draw.png'} />
                         <DesFeatures title="Microsoft Apps inbuilt" text="" source={process.env.PUBLIC_URL + '/Pictures/microsoft.png'} />
                    </div>
                    <div className="row mx-auto p-2">
                         <DesFeatures title="File Organization" text="" source={process.env.PUBLIC_URL + '/Pictures/file.png'} />
                         <DesFeatures title="Add Audio" text="" source={process.env.PUBLIC_URL + '/Pictures/add audio.png'} />
                    </div>
                    <div className="row mx-auto p-2">
                         <DesFeatures title="Add Video" text="" source={process.env.PUBLIC_URL + '/Pictures/add video.png'} />
                         <DesFeatures title="Share" text="" source={process.env.PUBLIC_URL + '/Pictures/share.png'} />
                    </div>
               </div>
               </m.div>
          </>
     );
}

export default Designs;