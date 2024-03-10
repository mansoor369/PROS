import "./home.scss"
import logo from "../../assets/img/logo-s.png"
import React from 'react'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import Mansoor from "../../assets/img/Developer.jpg"
import Logos from "../../assets/img/letter-m.png"
import Loader from "react-loaders";
import Skills from "../Skills/skills"
import About from "../About me/about"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faCss3, faGithub, faHtml5, faJava, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    <>
    <div className="container home-page">
      <div className="row">
        <div className="col-lg-7">
          <br />
          <div className="Heading">
            <small className="small">h1</small> <br />
            Hi, <br /> I'm
            <span className="Mansoor"> Mansoor khan,</span>
            <div className="Developer">Web Developer   <small className="small">/h1</small></div>

            <div className="roles"><small className="small">p1</small> <br />Front End Developer / Backend Developer / Freelancer<small className="small"> <br></br>/p1</small> </div>
            <Link to="./contact"><button className="Contact">Contact Me</button></Link>
          </div>
        </div>
        <div className="col-lg-5">
          <pre className="code d-flex justify-content-center align-items-center">
            <code >
              {`
      for (int i = 0; i < infinity; i++) {
        console.log("Bringing your ideas to life, pixel by pixel... 🎨");      
      }
      `}
            </code>
          </pre>
        </div>
      </div>


    </div>
    
    <Loader type="pacman" />
    </>
    

  )
}

export default Home;