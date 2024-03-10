import React, { useState } from 'react'
import "./skills.scss"
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from 'react-loaders';
import logos from "../../assets/img/letter-m.png"
import chatties from "../../assets/chattie.mp4"
import Guidway from "../../assets/Guideway.mp4"
import DreamTours from "../../assets/Dream Tours.mp4"
import guidwaypic from "../../assets/img/guideway.png"
import Dream from "../../assets/img/Dream Tours.png"
import chat from "../../assets/img/chat.png"
import emp from "../../assets/img/EMp.png"
import EMP from '../../assets/EMP.mp4'; // Import your video fileimport logos from "../../assets/img/Developer.jpg"
import { faAngular, faCss3, faGithub, faHtml5, faJava, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { type } from '@testing-library/user-event/dist/type';

const Skills = () => {

    const [isplaying, setisplaying] = useState({
        video1:false,
        video2:false,
        video3:false,
        video4:false,
    });


    const play = (videoid) =>{

    setisplaying(prevstate=>({
        ...prevstate,[videoid]:!prevstate[!videoid]
    }))
    }
    

    return (
        <>
            <div className='container skills'>
                <div className='row'>
                    <small className="small">h1</small> <br />
                    <div className='skills-heading'>Skills & Experience</div>
                    <small className="small">/h1</small> <br></br>
                    <div className='icons mt-3 mb-3'>
                        <FontAwesomeIcon className='icon' icon={faAngular} color="#DD0031" />
                        <FontAwesomeIcon className='icon' icon={faHtml5} color="#F06529" />
                        <FontAwesomeIcon className='icon' icon={faCss3} color="#28A4D9" />
                        <FontAwesomeIcon className='icon' icon={faReact} color="#5ED4F4" />
                        <FontAwesomeIcon className='icon' icon={faJsSquare} color="#EFD81D" />
                        <FontAwesomeIcon className='icon' icon={faGithub} color="#EC4D28" />

                    </div>
                </div>


                <div className='row cont'>
                    <span className='skills_ '>Express.js, React.js, Node.js, MongoDB</span>
                    <div className='projects'>
                        <small className="small_ mx-3">h1</small> <br />
                        <div className='skills-heading_'>Projects</div>
                        <small className="small_ mx-3">/h1</small>
                    </div>

                    <div onClick={()=>play('video1')} class="card  " style={{ width: 400,height:450 }}>
                        {isplaying.video1 ? (
                            <video className='img-fluid'
                                width={400} height={400} controls
                                autoPlay
                            >
                                <source type="video/mp4" src={EMP} />Your browser does not support this video
                            </video>) : <img className='img-fluid mx-auto' src={emp} width={300} height={300} alt="Video Thumbnail"  />}   

                        {/* <video width="320" height="240" controls>
                            <source src={require('../../assets/EMP.mp4')} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}
                        <div class="card-body text-center">
                            <h5 class="card-title  ">Employee Management System</h5>
                            <a href="https://github.com/mansoor369/PROS/tree/main/" class="btn butt ">🚀</a>
                        </div>
                    </div>
                    <div onClick={()=>play('video2')} class="card mx-3 " style={{ width: 400,height:400 }}>
                        {isplaying.video2 ? (
                            <video className='img-fluid'
                                width={400} height={400} controls
                                autoPlay
                            >
                                <source type="video/mp4" src={chatties} />Your browser does not support this video
                            </video>) : <img className='img-fluid mx-auto' src={chat} width={300} height={300} alt="Video Thumbnail"  />}   

                        {/* <video width="320" height="240" controls>
                            <source src={require('../../assets/EMP.mp4')} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}
                        <div class="card-body text-center">
                            <h5 class="card-title  ">Chat-App</h5>
                            <a href="https://github.com/mansoor369/PROS/tree/main/" class="btn butt ">🚀</a>
                        </div>
                    </div>
                </div>
                <div className='row contt'>
                <div onClick={()=>play('video3')} class="card mt-3" style={{ width: 400,height:400 }}>
                        {isplaying.video3 ? (
                            <video className='img-fluid'
                                width={400} height={400} controls
                                autoPlay
                            >
                                <source type="video/mp4" src={Guidway} />Your browser does not support this video
                            </video>) : <img className='img-fluid mx-auto' src={guidwaypic} width={300} height={300} alt="Video Thumbnail"  />}   

                        {/* <video width="320" height="240" controls>
                            <source src={require('../../assets/EMP.mp4')} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}
                        <div class="card-body text-center">
                            <h5 class="card-title  ">Guideway</h5>
                            <a href="https://github.com/mansoor369/PROS/tree/main/" class="btn butt ">🚀</a>
                        </div>
                    </div>
                    <div onClick={()=>play('video4')} class="card mx-3 mt-3" style={{ width: 400,height:450 }}>
                        {isplaying.video4 ? (
                            <video className='img-fluid'
                                width={400} height={400} controls
                                autoPlay
                            >
                                <source type="video/mp4" src={DreamTours} />Your browser does not support this video
                            </video>) : <img className='img-fluid mx-auto' src={Dream} width={300} height={300} alt="Video Thumbnail"  />}   

                        {/* <video width="320" height="240" controls>
                            <source src={require('../../assets/EMP.mp4')} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}
                        <div class="card-body text-center">
                            <h5 class="card-title  ">Dream Tours</h5>
                            <a href="https://github.com/mansoor369/PROS/tree/main/" class="btn butt ">🚀</a>
                        </div>
                    </div>

                </div>
            </div>






            <Loader type="pacman" />
        </>
    )
}

export default Skills