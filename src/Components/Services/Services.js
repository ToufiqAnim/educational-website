import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
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
            <h2 className='ms-5 mt-5 ps-5'>Topics:</h2>
            <div className="container btn-container">
                <Button className='btn'>Programming Languages</Button>
                <Button className='btn'>Graphics Design</Button>
                <Button className='btn'>Motion Design</Button>
                <Button className='btn'>Cooking</Button>
                <Button className='btn'>Languages</Button>
                <Button className='btn'>Web Developement</Button>
             </div>
            <h1 className='ms-5 ps-5 mt-5 fw-bold '>Courses</h1>
            
            <div className="services mt-0 m-5 p-5">
            
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