import React from 'react';
import DesFeatures from '../Elements/DesFeatures';
import {motion as m} from 'framer-motion';

function Designs() {
     return (
           <m.div className = "page"
          intial={{opacity: 1, transition: {duration: 2}}}
          animate={{width: "100%"}}
          exit={{x: window.innerWidth, opacity: 0}}
          >
               <div className="container my-4 mt-5">
                    <h3 className="text-dark" style={{letterSpacing:5}}>Products</h3>
               </div>
               <div className="container">
                    <div className="row my-3">
                         <h4 className="text-success bg-primary mx-2">CoCreate</h4>
                    </div>
               </div>

               <div className="container">
                    <h5 className="text-secondary">Features</h5>
                    <div className="row mx-auto p-2 my-3">
                         <DesFeatures title="Call" text="Seamlessly connect with members through high-quality audio and video calls, for real-time communication and collaboration, no matter where you are." source={process.env.PUBLIC_URL + '/Pictures/audio call.png'} />
                         <DesFeatures title="Chat" text="Instantly send chats with people individually or as groups, creating efficient communication within the team." source={process.env.PUBLIC_URL + '/Pictures/chat.png'} />
                    </div>
                    <div className="row mx-auto p-2">
                         <DesFeatures title="Collaborate" text="Work together in real-time on documents, presentations, and projects, enabling simultaneous editing and feedback for maximum productivity and creativity." source={process.env.PUBLIC_URL + '/Pictures/collaborate.png'} />
                         <DesFeatures title="Create" text="Generate new ideas and content through intuitive creation tools, including text documents, illustration tools, and multimedia presentations." source={process.env.PUBLIC_URL + '/Pictures/create.png'} />
                    </div>
                    <div className="row mx-auto p-2">
                         <DesFeatures title="Calendar" text=" Organize schedules, set deadlines, and coordinate meetings effortlessly with a shared calendar, syncing them across a team or for yourself." source={process.env.PUBLIC_URL + '/Pictures/calendar.png'} />
                         <DesFeatures title="Whiteboard" text=" Brainstorm, plan, and visualize ideas with an interactive digital whiteboard, which allows addition of other tools within the whiteboard for a multimedia experience." source={process.env.PUBLIC_URL + '/Pictures/whiteboard.png'} />
                    </div>
                    <div className="row mx-auto p-2">
                         <DesFeatures title="Watch Creators" text="Follow and engage with creators within the platform, gaining insights, inspiration, and knowledge from experts in various fields." source={process.env.PUBLIC_URL + '/Pictures/watch live.png'} />
                         <DesFeatures title="Write" text="Craft detailed notes, reports, and documentation directly within the app." source={process.env.PUBLIC_URL + '/Pictures/write doc.png'} />
                    </div>
                    <div className="row mx-auto p-2">
                         <DesFeatures title="Draw" text="Sketch diagrams, illustrate concepts, and annotate documents using our wide range of digital drawing tools and improve the visual element of projects " source={process.env.PUBLIC_URL + '/Pictures/draw.png'} />
                         <DesFeatures title="Microsoft Apps inbuilt" text=" Seamlessly integrate with Microsoft Office Suite, allowing users to import, edit, and export documents with familiar tools and formats." source={process.env.PUBLIC_URL + '/Pictures/microsoft.png'} />
                    </div>
                    <div className="row mx-auto p-2">
                         <DesFeatures title="File Organization" text="Easily manage and access files with intuitive organization features, including folders, tags, and search functionalities, ensuring a clutter-free workspace." source={process.env.PUBLIC_URL + '/Pictures/file.png'} />
                         <DesFeatures title="Add Audio" text="Add audio clips to messages, documents, and presentations, for additional context and clarity." source={process.env.PUBLIC_URL + '/Pictures/add audio.png'} />
                    </div>
                    <div className="row mx-auto p-2 mb-5">
                         <DesFeatures title="Add Video" text="Incorporate video content into the whiteboard, presentations, and documents, bringing a dynamic feel to projects." source={process.env.PUBLIC_URL + '/Pictures/add video.png'} />
                         <DesFeatures title="Share" text=" Share projects with team members and external collaborators effortlessly within the app or with social media" source={process.env.PUBLIC_URL + '/Pictures/share.png'} />
                    </div>
               </div>
               </m.div>
     );
}

export default Designs;