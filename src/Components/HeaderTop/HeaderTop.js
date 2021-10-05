import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import { Col, Row } from 'react-bootstrap';
import './HeaderTop.css'

const HeaderTop = () => {
    const history =useHistory();

    function btnClicked(){
        history.push("/services")
    }
    return (
        <div>
           <section className=' top-area'>
                <div className=' container p-5 pb-5'>
                    <Row className="justify-content-md-center">
                        <Col sm={6}  md={6} className="p-4" >
                            <p> <span style={{color:'#0e1133'}}>Access 2000+</span> <br></br> <span className="fw-bold">Online Tutorials From Top Instructor.</span>
                            </p>

                            <Button onClick={btnClicked} className='button border-0 fw-bold fs-4' style={{backgroundColor: '#D438F5', color:'white'}}>View Courses</Button>

                        </Col>
                        <Col sm={6} md={6} className="p-4">
                            <img className='img-fluid' src="https://www.birminghamtimes.com/wp-content/uploads/2020/06/CollegeStudents-1-.jpg" alt="" />
                        </Col>
                    </Row>
                </div>
            </section> 
        </div>
    );
};

export default HeaderTop;