import React, { useState } from 'react';
import './Faculty.css'; // Import the CSS file for styling

function Faculty() {
  const [searchTerm, setSearchTerm] = useState('');
  const [facultyMembers, setFacultyMembers] = useState([
    { name: 'A', domain: 'Computer Science' },
    { name: 'B', domain: 'Computer Science' },
    { name: 'C', domain: 'Computer Science' },
    { name: 'D', domain: 'Computer Science' },
    { name: 'E', domain: 'Computer Science' },
    { name: 'F', domain: 'Computer Science' },
    { name: 'G', domain: 'Computer Science' },
    { name: 'H', domain: 'Computer Science' },
    // Add more faculty members as needed
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2 className='FTitle'>Faculty Page</h2>
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
            <h3 className='FName'>{faculty.name}</h3>
            <p className='FDomain'>Domain: {faculty.domain}</p>
            <button className="invite-button">Invite</button>
            {index < facultyMembers.length - 1 && <hr />} {/* Separator line except for the last faculty */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
