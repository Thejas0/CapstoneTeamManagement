import React, { useState } from 'react';
import './Projects.css'; // Import the CSS file for styling

function Projects() {
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Sample project data (you can replace this with your actual data)
  const projects = [
    {
      title: 'Project 1',
      description: 'This is the description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Project 2',
      description: 'This is the description of Project 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Project 3',
      description: 'This is the description of Project 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      title: 'Project 4',
      description: 'This is the description of Project 4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      title: 'Project 5',
      description: 'This is the description of Project 5. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Project 6',
      description: 'This is the description of Project 6. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Project 7',
      description: 'This is the description of Project 7. Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      title: 'Project 8',
      description: 'This is the description of Project 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div className="projects-container">
      <h2>Projects Page</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search projects..."
          className="ProjSearchBar"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className='ProjSearch'>Search</button>
      </div>
      {/*<hr />*} {/* Separator line */}
      {projects.map((project, index) => (
        <div key={index} className="project-box">
          <h3 className='ProjTitle'>{project.title}</h3>
          <p className="ProjDesc">{project.description}</p>
          {/*index < projects.length - 1 && <hr />*/} {/* Separator line except for the last project */}
        </div>
      ))}
    </div>
  );
}

export default Projects;
