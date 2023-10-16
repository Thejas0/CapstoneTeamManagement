// src/components/Contact.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TeamInfo.css'
const TeamInfo = () => {
  return (
    <div className = 'bgImg'>
      <Link to="/invites" className="view-invites-button">
        View Invites
      </Link>
      {/* <h2>Team Details</h2> */}
         <div className="team-info-card">
          
      <h2>Team Information</h2>
      <div className="team-details">
        <p><strong>Team Name:</strong> My Team</p>
        <p><strong>Team ID:</strong> TEAM123</p>
        <p><strong>Team Leader:</strong> You & Me </p>
      </div>
      <div className="member-details">
        <h4>Members:</h4>
        <ul>
          <li>Member 1: MEMBER001</li>
          <li>Member 2: MEMBER002</li>
          <li>Member 3: MEMBER003</li>
          {/* Add more member IDs as needed */}
        </ul>
      </div>
      <div className="member-details">
        <h4>Faculty  : Your Wife</h4>
        
      </div>
    </div>
      {/* <p>Contains info about team</p> */}
    </div>
  );
};

export default TeamInfo;
