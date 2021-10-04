import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { IoBook } from "react-icons/io5";



const Header = () => {
   
    return (
        <div>
            
            <nav className="container-fluid d-flex align-items-center justify-content-center">
                <Link className="nav-logo " to='/'><IoBook className="logo" size=".8em"></IoBook> EduBuzz</Link>
                <Link className="navLink pe-5 fs-4" to='/home'>Home</Link>
                <Link className="navLink pe-5 fs-4" to='/services'>Services</Link>
                <Link className="navLink pe-5 fs-4" to='/about'>About</Link>
                <Link className="navLink pe-5 fs-4" to='/contact'>Contact</Link>
            </nav>
            
        </div>
    );
};

export default Header;