import React from 'react'
import "./about.scss"
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import Mansoor from "../../assets/img/Developer.jpg"
import Logos from "../../assets/img/letter-m.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from 'react-loaders';
import { faAngular, faCss3, faGithub, faHtml5, faJava, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";


const About = () => {

  return (
    <>
    <div className='container About-page'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='d-grid place-items-center about'>
                <small className="small">h1</small> <br />
                <div className='Heading'>About Me</div>
                <small className="small ">/h1</small>
                <div className='Paragraph text-white mx-4 mt-3'><p>Motivated Software Engineering student with a passion for web development, experienced in both front-end
and back-end technologies through internships and projects. Led the development of key websites,
showcasing proficiency in the MERN stack and a dedication to user-centric solutions. <br/> <br/>Active in academic
and extracurricular activities, demonstrating a strong skill set in software development, team collaboration,
and problem-solving. Eager to contribute to dynamic teams and further grow web development expertise.</p></div>
                </div>
                
              </div>

              <div className='col-lg-6'>
              <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
          </div>
        </div>
              </div>
            </div>
    </div>
    <Loader type="pacman" />
    </>
    
  )
}

export default About



{/* <div className="skills">
<div className="stage-cubec-cont d-flex justify-content-center align-items-center ">
      <div className="cube-spinner">
        <div className="icons d-flex" >
          <FontAwesomeIcon className="face" icon={faAngular} color="#DD0031"></FontAwesomeIcon>
          <FontAwesomeIcon className="face" icon={faHtml5} color="#F06529"></FontAwesomeIcon>

          <FontAwesomeIcon className="face" icon={faCss3} color="#28A4D9"></FontAwesomeIcon>
          <FontAwesomeIcon className="face" icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
          <FontAwesomeIcon  className="face"icon={faJsSquare} color="#EFD81D"></FontAwesomeIcon>
          <FontAwesomeIcon className="face" icon={faGithub} color="#EC4d28"></FontAwesomeIcon>
        </div>


        <div />
      </div>
    </div>
</div> */}