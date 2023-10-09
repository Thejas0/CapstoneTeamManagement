// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };
  // console.log("login : "+isLoggedIn);
  return (
    
    <nav className='navbar'>
      <div className='navbar-container'>
         
          <Link to='/' className='navbar-logo' >
            Team-UP
          </Link>
        <ul className= 'nav-menu'>
        <li className='nav-item'>
          <Link to="/faculty" className='nav-links'>Faculty</Link>
        </li>

        <li className='nav-item'>
          <Link to="/teaminfo" className='nav-links'>Team</Link>
        </li>
        <li className='nav-item'>
          <Link to="/Project" className='nav-links'>Project</Link>
        </li>
        <li className='nav-item'>
          <Link to="/profile" className='nav-links'>Profile</Link>
        </li>
       
        <li >
          <Link  className='nav-links'>Logout</Link>
        </li>
        
        </ul>
        
      </div>
    </nav>
  );
};

export  default Navbar;
