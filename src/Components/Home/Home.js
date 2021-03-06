
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// import { Col, Row } from 'react-bootstrap';

import Course from '../Course/Course';

import HeaderTop from '../HeaderTop/HeaderTop';
import './Home.css'

const Home = () => {
    const [courses, setcourses] = useState([]);
    useEffect(()=>{
        fetch('./home-data.json')
        .then(res => res.json())
        .then(data => setcourses(data))
    },[]);

    const buttonStyle={
        textDecoration:"none",
        border:"1px solid blue",
        padding:'18px',
    }
    return (
        <div >
            <HeaderTop></HeaderTop> 

             {/*course scetion  */}
            <section className="container">
                <Link style={{textDecoration:"none", marginLeft:"10px"}} to='/notFound'>Professional Certificates</Link>
                <h3 className='ps-2 mt-3 mb-4 fw-bold'>Explore Top Courses</h3>
                
                <div className=" course-details">
                    
                    {
                        courses.map(course => <Course
                            key = {course.id}
                            course ={course}
                        ></Course>)
                    }    
                
                </div>
                
            </section>
            <div className='mt-4 text-center'>
                <Link className='button fw-bold fs-5 ms-2 mt-5 text-center' style={buttonStyle} to='/services' >View More Courses</Link>
                </div>
            </div>
    );
};

export default Home;

