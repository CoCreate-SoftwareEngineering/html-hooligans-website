import React, { useState } from 'react';
import '../StyleSheets/Home.css';
import Features from '../Elements/Features';
import Vision from '../Elements/Vision';
import Users from '../Elements/Users';
import {motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
    <m.div className ="page"
      intial={{opacity: 1, transition: {duration: 1}}}
      animate={{width: "100%"}}
      exit={{opacity: 0}}    
      >            
      {/* Introduction block - who we are and company vision */}
      <div className="container mb-5 my-4" style={{ maxWidth: '70rem' }}>
        <div className="card border-light">
          <h5 className="card-header bg-primary border-primary text-light" style={{ textAlign: "center" }}>
            HTML Hooligans
          </h5>
          <div className="card-body">
            <h6 className="blockquote text-dark my-3" style={{textAlign:"center"}}>
              Where creativity meets collaboration!
            </h6>
            <p className="text-dark" style={{ textAlign: "center" }}>We are a team of seven students united by a common passion for software engineering, dedicated to creating a revolutionary collaborative platform. </p>
            <p className="text-dark" style={{ textAlign: "center" }}>Our shared vision is to redefine the way individuals and groups work together, enhancing seamless communication and productivity in the digital era.</p>
          </div>
        </div>
      </div>

      {/* Company vision */}
      <div className="container">
        <h3>Our Vision</h3>
        <div className="row my-4">          
          <Vision title="User-Centric Design" text = "Understanding the diverse needs of our users is paramount. Our goal is to develop an intuitive and user-friendly platform that empowers teams to collaborate effortlessly. We are committed to delivering a product that enhances the user experience, making work enjoyable and efficient." />
          <Vision title="Innovation at the Core" text = "We strive to be at the forefront of technological advancements, infusing our collaborative platform with cutting-edge features that anticipate and meet the evolving needs of our users. By prioritizing innovation, we aim to provide a platform that not only meets but exceeds expectations." />
        </div>
        <div className="row my-4">
          <Vision title="Seamless Integration" text = "Recognizing the importance of integration in modern workflows, we aim to provide a platform that seamlessly integrates with existing tools and applications. This approach ensures a smooth transition for teams adopting our collaborative platform, enhancing overall workflow efficiency." />
          <Vision title="Scalability" text = "As we envision widespread adoption of our collaborative platform, we prioritize scalability. Our goal is to design and implement a system that can effortlessly grow with the demands of our expanding user base, ensuring reliability and performance at any scale." />                   
        </div>
      </div>

      {/* Short intro to CoCreate */}
      <div className="container">
        <h3>Our product</h3>
        <img src={process.env.PUBLIC_URL + '/Co_Create_Logo_blue.png'} className="img rounded float-start mx-5 my-5" alt="CoCreate Logo" style={{ maxWidth: '125px' }} />
        <div className="row my-5">
               <h5 >CoCreate</h5>
                <p className="text-info">CoCreate is an online collaboraive space where people can interact and work together to organize, annotate, share, and create ideas.
                  We have created a platform with all the features that you would need to collaborate, all in the same app!
                  The app can be used by anyone, from students to professionals, to collaborate on projects, assignments, and more.
                  It has extensive audio and video call capabilities and integrates Microsoft Office tools to help a seamless collaboration experience.
                  The projects can also utilize the in-built whiteboard feature and document editor to help you create and share ideas.
                </p>              
      </div>
      </div>

      {/* Some features of CoCreate */}
      <div className="container my-5">
        <h3>Features of CoCreate</h3>
        <div className="row">
          <Features title="Call"/>
          <Features title="Chat"/>
          <Features title = "Create" />
          <Features title = "Collaborate" />            
        </div>
        <Link to ="/designs" className= "card-link my-4 mx-auto p-2">Learn more →</Link>
      </div>

      {/* Ideal userbase */}
      <div className="container my-4">
        <h3>How to use CoCreate</h3>  
        <div class="row">  
          <Users title="individuals" text="Create documents, draw on whiteboards, and more with CoCreate. Share your ideas with others and work together on projects." />        
          <Users title="students" text="Collaborate with your classmates on assignments and projects. Share your ideas and work together to create the best product possible." />
        </div>
        <div class="row">
          <Users title="educators" text="Collaborate with your students on assignments and projects. Create assignments and share them with your students" />
          <Users title="artists" text="Create beautiful illustrations with our various tools, and share them with other creators on CoCreate or other apps." />
        </div>
        <div class="row">
          <Users title="advertisers" text="Create posters, banners, and more with CoCreate, and share them on social media." />
        </div>
        </div>
    </m.div>
    </>
  );
}

export default Home;