import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import "./contact.scss"
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from 'react-loaders';
import emailjs from "@emailjs/browser"
import { faAngular, faCss3, faGithub, faHtml5, faJava, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";


const Contact = () => { 
  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  const [subject,setsubject] = useState('')
  const [message,setmessage] = useState('')
  const submitempty  = () =>{
    const form = document.getElementById('form');
    form.reset();
  }
    useEffect(() => {
        // Trigger the typing animation
        const contacts = document.querySelector('.contacts');
        contacts.classList.add('typing-animation');
    }, []);

    const template_params = {
      to_name:"Mansoor khan",
      from_name:name,
      from_email:email,
      from_subject:subject,
      message : message
    }
    const form = useRef(null);
    const sendEmail = (e) =>{
      e.preventDefault();
      emailjs.send(
        'service_8hpjq3q',
        'template_w9p9pm8',
          template_params,
        'zpNuZ9PYsYqgcYlcm'
        )
        .then(
          ()=>{
            console.log('success!')
          },
          (error) =>{
            console.log("Failed !",error.text)
          }
        )
    }

  return (
    <>
    <div className='container contact'>
        <div className='row'>
            <form id='form'  ref={form} onSubmit={sendEmail} className='col-lg-6'>
                  
            <small className="small">h1</small> <br />
            <div className='Heading'>Contact Me</div>
            <small className="small">/h1</small>

            
                            <div class="form-group ">
                                <input name='user_name' onChange={(e)=>setname(e.target.value)}  class="form-control " type="text" placeholder="Full name" />
                                <input name='user_email' onChange={(e)=>setemail(e.target.value)}  class="form-control" type="Email" placeholder="Email" />
                                <input name='_user_subject' onChange={(e)=>setsubject(e.target.value)}  class="form-control" type="text" placeholder="Subject" />
                                <textarea name="user_message"onChange={(e)=>setmessage(e.target.value)}  class="form-control"  rows="4" placeholder="Write a message"></textarea>
                                   
                                </div>
                            
                        
                        <button onClick={submitempty}  className="Contacts ">Submit</button>
            </form>
            
            <div className='col-lg-6 mt-5 '>
            <div className='contacts'>
            <h1 className='Heading_   mt-5'>Email :mku.18.08.02@gmail.com</h1> <br />
                            <h1 className='Heading_'>Phone: +92 313 760 1208</h1> <br />
                            <h1 className='Heading_'>Peshawar, Pakistan</h1> <br />
                            <h1 className='Heading_'>25000</h1> <br />
                </div>
                            

            </div>
        </div>
    </div>
   <Loader type="pacman" />
    </>
    
  )
}

export default Contact



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