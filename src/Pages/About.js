import React from 'react';
import '../StyleSheets/About.css';
import AboutCard from '../Elements/AboutCard';
import { motion as m } from 'framer-motion'

function About() {
     return (
          <m.div className="page"
               intial={{width: "100%", opacity: 1 }}
               animate={{ width: "100%" }}
               exit={{ x: window.innerWidth, opacity: 0 }}
          >
               <div className="container my-4">
                    <h3 className="text-dark">About CoCreate</h3>
               </div>
               <div className="container my-4 mx-auto d-block">
                    <img src={process.env.PUBLIC_URL + '/Pictures/audio call.png'} class="rounded float-end" alt="..." style={{ maxWidth: "150px" }} />
                    <img src={process.env.PUBLIC_URL + '/Pictures/audio call.png'} class="rounded float-end" alt="..." style={{ maxWidth: "150px" }} />
                    <p className="text-info">---- Placeholder text---- CoCreate is an online collaboraive space where people can interact and work together to organize, annotate, share, and create ideas.
                         We have created a platform with all the features that you would need to collaborate, all in the same app!
                         The app can be used by anyone, from students to professionals, to collaborate on projects, assignments, and more.
                         It has extensive audio and video call capabilities and integrates Microsoft Office tools to help a seamless collaboration experience.
                         The projects can also utilize the in-built whiteboard feature and document editor to help you create and share ideas.
                    </p>
               </div>
               <div className="container">
                    <h5 className="text-dark">Who is CoCreate For</h5>
                    <div class="row">
                         <AboutCard title="individuals" text="Create documents, draw on whiteboards, and more with CoCreate. Share your ideas with others and work together on projects." />
                         <AboutCard title="individuals" text="Create documents, draw on whiteboards, and more with CoCreate. Share your ideas with others and work together on projects." />
                    </div>
                    <div class="row">
                         <AboutCard title="individuals" text="Create documents, draw on whiteboards, and more with CoCreate. Share your ideas with others and work together on projects." />
                         <AboutCard title="individuals" text="Create documents, draw on whiteboards, and more with CoCreate. Share your ideas with others and work together on projects." />
                    </div>
                    <div class="row">
                         <AboutCard title="individuals" text="Create documents, draw on whiteboards, and more with CoCreate. Share your ideas with others and work together on projects." />
                         <AboutCard title="individuals" text="Create documents, draw on whiteboards, and more with CoCreate. Share your ideas with others and work together on projects." />
                    </div>
                    <div class="row">
                         <AboutCard title="individuals" text="Create documents, draw on whiteboards, and more with CoCreate. Share your ideas with others and work together on projects." />
                    </div>
               </div>
          </m.div>
     );
}

export default About;