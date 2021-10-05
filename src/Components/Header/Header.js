import React from 'react';
import { Link } from 'react-router-dom';

import { IoBook } from "react-icons/io5";
import { Container, Nav, Navbar } from 'react-bootstrap';



const Header = () => {
   
    return (
        <div>
        <Navbar expand="lg" className='shadow'  style={{lineHeight:"80px"}}>
            <Container > 
                <Navbar.Brand as={Link} to="/home" className="fs-1 fw-bold text-primary">
                    <IoBook className="logo text-primary" size=".8em"></IoBook> EduBuzz  
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{marginLeft:"50%"}}>
                        <Nav.Link as={Link} to="/home" className="fs-5 text-dark pe-3">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services" className="fs-5 text-dark pe-3">Services</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="fs-5 text-dark  pe-3">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="fs-3 fw-bold text-primary pe-3">Join Us</Nav.Link>   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;