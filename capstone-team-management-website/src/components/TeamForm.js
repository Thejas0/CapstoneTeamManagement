import React, { useState } from 'react';
import './TeamForm.css';

const TeamForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    teamName: '',
    domain: '',
    members: [],
    newMemberName: '', // New member name input field value
  });

  const [isAddingMember, setIsAddingMember] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddMember = () => {
    if (formData.members.length < 2) {
      setFormData({
        ...formData,
        members: [...formData.members, formData.newMemberName],
        newMemberName: '', // Clear the new member name input
      });
      setIsAddingMember(true); // Set the flag to indicate Add Member mode
    }
  };

  const handleMemberInputChange = (e, index) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = e.target.value;

    setFormData({
      ...formData,
      members: updatedMembers,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data (e.g., send it to an API or store it in state)
    console.log(formData); // For demonstration, log the form data
  };

  return (
    <div className="center-container">
      <form onSubmit={handleSubmit}>
        <div className="form-box">
          <div className="username">
            <label>Team Leader: </label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
            />
          </div>

          <div className="teamname">
            <label>Team Name: </label>
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleInputChange}
            />
          </div>

          <div className="domain">
            <label>Domain: </label>
            <input
              type="text"
              name="domain"
              value={formData.domain}
              onChange={handleInputChange}
            />
          </div>

          <div className="members">
            <label>Members: </label>
            {formData.members.map((member, index) => (
              <div
                key={index}
                className={`member-input ${isAddingMember ? 'narrow-member-input' : ''}`}
              >
                <input
                  type="text"
                  name={`members[${index}]`}
                  value={member}
                  onChange={(e) => handleMemberInputChange(e, index)}
                />
              </div>
            ))}
            {formData.members.length < 3 && (
              <div className="member-input">
                <input
                  type="text"
                  name="newMemberName"
                  value={formData.newMemberName}
                  onChange={handleInputChange}
                />
              </div>
            )}
            {formData.members.length < 2 && (
              <button type="button" className="AddMember" onClick={handleAddMember}>
                Add Member
              </button>
            )}
          </div>

          <div className="submitbutton">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TeamForm;
