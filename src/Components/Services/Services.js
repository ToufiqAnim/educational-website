
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderTop from '../HeaderTop/HeaderTop';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
        useEffect(()=>{
            fetch('./service-data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <section>
            <HeaderTop></HeaderTop>
            <h2 className='mt-5 text-center mb-4 fw-bold' style={{color:"#5624d0"}}>Top categories</h2>
            

             <Container>
                 <Row className="">
                     <Col xs={6} sm={6} md={4}>
                         <Link to="/notfound" className="btn w-100 p-3 fw-bold fs-5  mb-4">Development</Link>
                    </Col>

                     <Col xs={6} sm={6} md={4}>
                         <Link to="/notfound" className="btn w-100 p-3 fw-bold fs-5 ">Design</Link>
                    </Col>

                     <Col xs={6} sm={6} md={4}>
                         <Link to="/notfound" className="btn w-100 p-3 fw-bold fs-5 mb-4">Software & It</Link>
                    </Col>

                     <Col xs={6} sm={6} md={4}>
                         <Link to="/notfound" className="btn w-100 p-3 fw-bold fs-5">Photography</Link>
                    </Col>

                     <Col xs={6} sm={6} md={4}>
                         <Link to="/notfound" className="btn w-100 p-3 fw-bold fs-5">Languages</Link>
                    </Col>

                     <Col xs={6} sm={6} md={4}>
                         <Link to="/notfound" className="btn w-100 p-3 fw-bold fs-5">Business</Link>
                    </Col>
                 </Row>
             </Container>
            <h1 className='ms-5 ps-5 mt-5 mb-4 fw-bold text-center' style={{color:"#5624d0"}}>Students are viewing</h1>
            
            <div className="services container ">   
                {
                    services.map(service => <Service
                    key={service.id}
                    service = {service}
                    ></Service>)
                }            
            </div>
        </section>
       
    );
};

export default Services;