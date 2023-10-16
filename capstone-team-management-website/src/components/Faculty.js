import React, { useState } from 'react';
import './Faculty.css'; // Import the CSS file for styling

function Faculty() {
  const [searchTerm, setSearchTerm] = useState('');
  const [facultyMembers, setFacultyMembers] = useState([
    { name: 'A', id:'F21Pes',domain: 'Computer Science' },
    { name: 'B', id:'F21Pes',domain: 'Computer Science' },
    { name: 'C', id:'F21Pes',domain: 'Computer Science' },
    { name: 'D', id:'F21Pes',domain: 'Computer Science' },
    { name: 'E', id:'F21Pes',domain: 'Computer Science' },
    { name: 'F', id:'F21Pes',domain: 'Computer Science' },
    { name: 'G', id:'F21Pes',domain: 'Computer Science' },
    { name: 'H', id:'F21Pes',domain: 'Computer Science' },
    // Add more faculty members as needed
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Faculty By Name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className='FSearch'>Search</button>
      </div>
      <hr />
      <div className="faculty-list">
        {facultyMembers.map((faculty, index) => (
          <div key={index} className="faculty-item">
            <div className = "column-display">
            <h3 className='FName'>{faculty.name}</h3>
            <p className='FId'> {faculty.id}</p>

            <p className='FDomain'>Domain: {faculty.domain}</p>
            </div>
            <button className="invite-button">Invite</button>
            {/* {index < facultyMembers.length - 1 && <hr />} Separator line except for the last faculty */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
