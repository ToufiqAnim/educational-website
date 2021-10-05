import React from 'react';
import {  useHistory } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import { Col, Row } from 'react-bootstrap';


const HeaderTop = () => {
    let history =useHistory();

    
    function joinBtnClicked(){
        history.push("/contact")
    }

    
    return (
        <div>
           <section className=' top-area'>
                <div className=' container p-5 pb-5'>
                    <Row className="justify-content-md-center">
                        <Col sm={6}  md={6} className="p-4" >
                            <h1 className="fw-bold" style={{fontSize:"70px"}}>
                                Learn Without Limits
                            </h1>
                            <p>
                                Build skills with courses, certificates, and degrees online from world-class universities and companies.
                            </p>

                                <Button  onClick={joinBtnClicked}  className='button  fw-bold fs-4 btn-primary me-2 ' >Join Now</Button>

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