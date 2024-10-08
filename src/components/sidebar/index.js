import React from 'react'
import "./index.scss"
import logoS from "../../assets/img/letter-m.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
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
            <NavbarBrand><img className='img-fluid' width={40} src={logoS} alt='yes' /> </NavbarBrand>
            <Nav>
            <Nav.Item className='nav-link'>
            <Link to="/" className="nav-link">HOME</Link>
          </Nav.Item>
          <Nav.Item className='nav-link'>
            <Link to="/skills" className="nav-link">SKILLS</Link>
          </Nav.Item>
          <Nav.Item className='nav-link'>
            <Link to="/contact" className="nav-link">CONTACT</Link>
          </Nav.Item>
          <Nav.Item className='nav-link'>
            <Link to="/about" className="nav-link">ABOUT</Link>
          </Nav.Item >
            </Nav>

            <Nav>

              <ul class="navbar-nav ml-auto">
                <li class="nav-itemm px-4">
                  <a class="nav-linkk" target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/mansoor-khan-37411a2a6/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                  </a>
                </li>
                <li class="nav-itemm px-4">
                  <a class="nav-linkk" target='_blank' rel='noreferrer' href='https://github.com/mansoor369'>
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