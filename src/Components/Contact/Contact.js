import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='container' style={{marginBottom:'100px', marginTop:'100px'}}>
            <Row>
                <Col sm={8}>
                <Form className=" mt-5">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control placeholder="Subject" />
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Enter Your Massage"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>

                <Button className='btn py-2 px-4 btn-outline-primary fs-4 mt-3' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
                </Col>

                <Col sm={4}>
                    <img className='mt-3' src="./contact.png" alt="" />
                </Col>
            </Row>
            
        </div>
    );
};

export default Contact;