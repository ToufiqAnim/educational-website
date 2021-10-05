import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import { IoPeopleSharp } from "react-icons/io5";
import { GiBookCover, GiTeacher } from "react-icons/gi";
import { SiIbm } from "react-icons/si";

const About = () => {
    return (
        <div>
           <div  className="about">
                {/* <h1 className="about text-center text-white fw-bolder mb-5  p-5  ">About Us</h1> */}
                <img src="./about-us.png" alt="" />
           </div>
           <div className='container text-center mt-3 mb-5'>
                <h2><span className="text-primary">Changing </span> learning for the better</h2>
                            
           </div>

            <Container >
                <Row>
                    <Col xs={12} sm={6} className="p-5">
                        <img className="img-fluid" src="./impact.png" alt="" />
                    </Col>
                    <Col xs={12} sm={6} className="p-5 fs-4"  >
                        <h1>Our Mission</h1>
                        <ul>
                            <li>Increase access to high-quality education for everyone, everywhere</li>
                            <li>Enhance teaching and learning</li>
                            <li>Advance teaching and learning through research</li>
                        </ul>
                    </Col>
                </Row>
            </Container>


            <Container className='text-center mt-5 about-us'>
                <Row>
                    <Col sm={6} md={3}>
                    <h3 className="fw-bold"> <IoPeopleSharp></IoPeopleSharp> 330k+</h3>
                    <p className="fs-3">Students Enrolled</p>
                    </Col>
                    <Col sm={6} md={3}>
                    <h3 className="fw-bold"><GiBookCover></GiBookCover> 2,145</h3>
                    <p className="fs-3">Total Course</p>
                    </Col>
                    <Col sm={6} md={3}>
                    <h3 className="fw-bold"><GiTeacher></GiTeacher> 25k</h3>
                    <p className="fs-3"> Teachers</p>
                    </Col>
                    <Col sm={6} md={3}>
                    <h3 className="fw-bold"><SiIbm></SiIbm> 145+</h3>
                    <p className="fs-3">Partners</p>
                    </Col>
                </Row>
            </Container>

            <img className='img-fluid' src="./partners.png" alt="" /> 
        </div>
    );
};

export default About;