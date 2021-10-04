import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import './Header.css';
import { IoBook } from "react-icons/io5";
import Button from '@restart/ui/esm/Button';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
    const history =useHistory();

    function btnClicked(){
        history.push("/services")
    }
    return (
        <div>
            
            <nav className="container-fluid d-flex align-items-center justify-content-center">
                <Link className="nav-logo " to='/'><IoBook className="logo" size=".8em"></IoBook> EduBuzz</Link>
                <Link className="navLink pe-5 fs-4" to='/home'>Home</Link>
                <Link className="navLink pe-5 fs-4" to='/services'>Services</Link>
                <Link className="navLink pe-5 fs-4" to='/about'>About</Link>
                <Link className="navLink pe-5 fs-4" to='/contact'>Contact</Link>
            </nav>

            <section className=' top-area'>
                <div className=' container p-5 pb-5'>
                    <Row className="justify-content-md-center">
                        <Col sm={12} md={6}>
                            <p> <span style={{color:'#0e1133'}}>Access 2000+</span> <br></br> <span className="fw-bold">Online Tutorials From Top Instructor.</span>
                            </p>

                            <Button onClick={btnClicked} className='button border-0 fw-bold fs-4' style={{backgroundColor: '#D438F5', color:'white'}}>View Courses</Button>

                        </Col>
                        <Col sm={12} md={6}>
                            <img className='img-fluid' src="https://www.birminghamtimes.com/wp-content/uploads/2020/06/CollegeStudents-1-.jpg" alt="" />
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
};

export default Header;