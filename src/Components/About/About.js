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
               

        </div>
    );
};

export default About;