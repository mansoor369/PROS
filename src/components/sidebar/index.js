import React from 'react'
import "./index.scss"
import logoS from "../../assets/img/letter-m.png"
import logosub from "../../assets/img/logo_sub.png"
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faSketch } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavbarBrand } from 'react-bootstrap'
const Sidebar = () => {

  return (

    <>
      <Navbar expand="lg" className="bg-transparent">
        <Container className='d-flex justify-content-center'>
          <Navbar.Toggle className='toggler' aria-controls="basic-navbar-nav">
            🌟
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className='Nav'>
            <NavbarBrand><img className='img-fluid' width={40} src={logoS} /> </NavbarBrand>
            <Nav>
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/skills">SKILLS</Nav.Link>
              <Nav.Link href='/contact'>CONTACT</Nav.Link>
              <Nav.Link href='/about'>ABOUT</Nav.Link>
            </Nav>

            <Nav>

              <ul class="navbar-nav ml-auto">
                <li class="nav-itemm px-4">
                  <a class="nav-linkk" target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/mansoor-khan-37411a2a6/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                  </a>
                </li>
                <li class="nav-itemm px-4">
                  <a class="nav-linkk" target='_blank' rel='noreferrer' href='https://github.com/mansoor369/PROS'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                  </a>
                </li>
                <li class="nav-itemm px-4">
                  <a class="nav-linkk" target='_blank' rel='noreferrer' href='https://www.facebook.com/profile.php?id=100007824377061'>
                    <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
                  </a>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>

  )

}
export default Sidebar;