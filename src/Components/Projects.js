import React from 'react';
import ProjectBox from './ProjectBox';
import Auth from '../images/Auth.png';
import FirebaseCrud from '../images/FirebaseCrud.png';
import Adminpanle from '../images/Adminpanle.png';
import boot from '../images/Bootsrtap.png';



const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Auth} projectName="Authentication" />
        <ProjectBox projectPhoto={boot} projectName="Responsiveweb" />
        <ProjectBox projectPhoto={Adminpanle} projectName="BlogAdmin" />
        <ProjectBox projectPhoto={FirebaseCrud} projectName="Firebasecrud" />
      </div>

    </div>
  )
}

export default Projects