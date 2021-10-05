import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
           <div  className="about">
                {/* <h1 className="about text-center text-white fw-bolder mb-5  p-5  ">About Us</h1> */}
                <img src="./about-us.png" alt="" />
           </div>
           <div className='container text-center mt-5'>
                <h2>Changing learning for the better</h2>
                <p>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>               
           </div>


            <Container className='text-center mt-5 about-us'>
                <Row>
                    <Col sm={6} md={3}>
                    <h3>330k</h3>
                    <p>Students Enrolled</p>
                    </Col>
                    <Col sm={6} md={3}>
                    <h3>2,145</h3>
                    <p>Total Course</p>
                    </Col>
                    <Col sm={6} md={3}>
                    <h3>25k</h3>
                    <p>Teachers</p>
                    </Col>
                    <Col sm={6} md={3}>
                    <h3>25k</h3>
                    <p>Teachers</p>
                    </Col>
                </Row>
            </Container> 
        </div>
    );
};

export default About;