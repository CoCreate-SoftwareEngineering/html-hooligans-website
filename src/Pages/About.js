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
                    <h3 className="text-dark mt-4" style={{letterSpacing:5}}>About CoCreate</h3>
               </div>
               <div className="container my-2 mx-auto d-block">
                    <img src={process.env.PUBLIC_URL + '/Pictures/figma1.png'} className="float-end mx-2" alt="..." style={{ maxWidth: "350px"}} />
                    <img src={process.env.PUBLIC_URL + '/Pictures/figma2.png'} className="float-end mx-2" alt="..." style={{ maxWidth: "350px" }} />
                    <p className="text-info">---- Placeholder text---- CoCreate is an online collaboraive space where people can interact and work together to organize, annotate, share, and create ideas.
                         We have created a platform with all the features that you would need to collaborate, all in the same app!
                         The app can be used by anyone, from students to professionals, to collaborate on projects, assignments, and more.
                         It has extensive audio and video call capabilities and integrates Microsoft Office tools to help a seamless collaboration experience.
                         The projects can also utilize the in-built whiteboard feature and document editor to help you create and share ideas.
                    </p>
               </div>
               <div className="container">
                    <h4 className="text-dark my-3" >Who is CoCreate For</h4>
                    <div className="row px-5">
                         <AboutCard title="individuals" text="Stay connected and organized, collaborate with others seamlessly, and access a centralized platform for managing tasks and projects efficiently, whether for personal or professional use." />
                         <AboutCard title="students" text="Work on group projects and have study sessions with real-time collaboration tools, easily share notes and resources, and stay updated on schedules and deadlines with integrated calendars, all within a user-friendly interface designed to support academic success." />
                    </div>
                    <div className="row px-5">
                         <AboutCard title="educators" text="Create ineractive study material for students, keep up to date with tasks and deadlines and create a collaborative space with multiple students" />
                         <AboutCard title="advertisers" text="Communicate with team members and clients on campaigns, brainstorm using visual tools, and streamline project management processes, delivering impactful and cohesive marketing strategies." />
                    </div>
                    <div className="row mb-4" style={{justifyContent:"center"}}>
                         <AboutCard title="artists" text="Showcase portfolios, work with fellow artists on creative projects, and access intuitive design tools for sketching and ideation, while also networking with potential collaborators and clients within a vibrant community of like-minded creators." />
                                             </div>                    
               </div>
          </m.div>
     );
}

export default About;