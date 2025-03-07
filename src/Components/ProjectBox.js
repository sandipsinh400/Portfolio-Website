import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    FirebasecrudDesc : "Users can create, read, update, and delete data in Firestore or Realtime Databases using Firebase CRUD operations. React apps can effectively store and manage data with real-time updates, authentication, and security restrictions by using the Firebase SDK. 🚀",
    FirebasecrudGithub : "https://github.com/sandipsinh400/firebase-crude.git",
    FirebasecrudWebsite : "https://firebase-crude.vercel.app/",

    BlogAdminDesc : "The Node.js Blog Application allows users to manage blogs and profiles with user authentication (bcryptjs, express-session). It offers full CRUD functionality for blogs, including image uploads via Multer. Built with EJS templates, Bootstrap, MongoDB, and secure password hashing, the app is designed for scalability and a user-friendly interface.",
    BlogAdminGithub : "https://github.com/sandipsinh400/blog-CRUD.git",
    BlogAdminWebsite : "https://blog-crud-xin5.onrender.com/login",

    ResponsivewebDesc:"The website's responsiveness is achieved using HTML5, CSS3, and Bootstrap. It has a modern mobile-first design structure based on the Bootstrap grid system and components. The structure is further beautified with separate custom CSS style sheets. This project gives importance to accessibility, fast loading, and user experience on all devices.",
    ResponsivewebGithub:"https://github.com/sandipsinh400/Bootstrap-Web.git",
    ResponsivewebWebsite:"https://spiffy-cranachan-2014c2.netlify.app/",
    
    AuthenticationDesc:"Secure user login by email and password or third-party providers like Google is made possible using React authentication with Firebase. Security, token management, and user sessions are handled by Firebase Authentication. Google login makes the procedure easy and safe by allowing users to authenticate using their Google account. 🚀.",
    AuthenticationGithub:"https://github.com/sandipsinh400/authentication.git",
    AuthenticationWebsite:"https://sandipsinh-ebon-three.vercel.app/",

    TicketSystemDesc:"🚀 This project is a web-based ticketing system where users can create tickets, and admins can manage them efficiently. Built with React.js, Node.js, and MongoDB, it includes authentication, ticket status updates, and attachments. ☁️ The app will be deployed on Netlify/Vercel with a responsive UI and proper validations.",
    TicketSystemGithub:"https://github.com/sandipsinh400/Ticketing-System-Application.git",
    TicketSystemWebsite:"https://ticket-frontend-n8w5.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox