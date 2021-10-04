import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
           <div  className="about">
                <h1 className="about text-center text-white fw-bolder mb-5  p-5  ">About Us</h1>
           </div>
           <div className='container text-center'>
          {/*  <h1 className='fw-bold'>Our Mission</h1>
               <p className='fs-3'>Changing learning for the better
                Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p> */}

                <h2>Changing learning for the better</h2>
                <p>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>


                
           </div>
           <div className="container text-center mt-5">
                <h3>We Are Proud</h3>
                <p>You don't have to struggle alone, you've got our assistance and help.</p>
            </div>
           <section class="about-us container text-center text-primary  ">
                
                <div class="followers p-5 me-5 ms-5">
                    <h3>330k</h3>
                    <p>Students Enrolled</p>
                </div>
                <div class="followers p-5 me-5 ms-5">
                    <h3>2,145</h3>
                    <p>Total Course</p>
                </div>
                <div class="followers p-5 me-5 ms-5">
                    <h3>25k</h3>
                    <p>Teachers</p>
                </div>
                <div class="followers p-5 me-5 ms-5">
                    <h3>250k</h3>
                    <p>Global Followers</p>
                </div>
            </section>
               

        </div>
    );
};

export default About;