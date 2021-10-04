
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

// import { Col, Row } from 'react-bootstrap';

import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    const [courses, setcourses] = useState([]);
    useEffect(()=>{
        fetch('./home-data.json')
        .then(res => res.json())
        .then(data => setcourses(data))
    },[])
    return (
        <div >
            
            
            <section className="container">
                <h1 className='ps-2 mt-5 fw-bold'>Popular Courses</h1>
                <div className=" course-details ">
                    
                    {
                        courses.map(course => <Course
                            key = {course.id}
                            course ={course}
                        ></Course>)
                    }    
                
                </div>
    
            </section>
            
        </div>
    );
};

export default Home;

