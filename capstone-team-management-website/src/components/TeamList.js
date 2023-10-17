// TeamInfo.js

import React from 'react';
import TeamCard from './TeamCard';
import './TeamList.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';


const TeamList = () => {
  return (
    <div>
      <div className="header">
        <div className="search-bar">
          <input type="text" className='SearchText' placeholder="Search For Team" />
          <button type="button" className='SearchButton'>Search</button>
        </div>
        {/*<button type="button" className="create-team-button">Create Team</button>*/}
        <Link to="/createteam" className="create-team-button">Create Team</Link>
      </div>

      <div className="team-cards-container">
        <TeamCard teamName="Team A" domain="Computer Science" availableSlots={3} />
        <TeamCard teamName="Team B" domain="Computer Science" availableSlots={0} />
        <TeamCard teamName="Team C" domain="Computer Science" availableSlots={4} />
        <TeamCard teamName="Team D" domain="Computer Science" availableSlots={1} />
        <TeamCard teamName="Team E" domain="Computer Science" availableSlots={2} />
        {/* Add more TeamCard components as needed */}
      </div>
    </div>
  );
};

export default TeamList;
