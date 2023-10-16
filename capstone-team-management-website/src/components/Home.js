// src/components/Home.js
import React from 'react';
import './Home.css';
import { Footer } from './Footer';
const Home = () => {
  return (
    <div>
    <div className='home-page' >
      {/* <h2>Home Page</h2> */}

      <div className='subtitle'>

      Team-Up: Where Capstone Success Begins with the Perfect Team
      </div>
      <div className ='subtitle2'>Team formation made easier, faster, and better.</div>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
