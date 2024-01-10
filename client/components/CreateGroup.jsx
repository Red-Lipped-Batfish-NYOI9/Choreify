import React, { useState } from 'react';
import '../styles.css';
// import { usePostNewGroupMutation } from '../redux/api/groups/groupsApi';
import { useNavigate } from 'react-router-dom';

export default function groupCreationForm() {
  const [groupName, setGroupName] = useState('');
  const [groupMembers, setGroupMembers] = useState('');
  const navigate = useNavigate();

  const newGroupHandler = (e) => {
    e.preventDefault();
    fetch('/api/createNewGroup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ groupName, groupMembers }),
    })
      .then(navigate('/'));
  };

  return (
    
      <form onSubmit={newGroupHandler}>
        <label htmlFor="groupName">
          New Group Name:
          <input
            type="text"
            placeholder="The Savibar Family, Three Blind Mice, Hansel & Gretel, Inc., etc."
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </label>
        <label htmlFor="memberNames">
          Add Members &#40;First Name, Last Name&#41;:
          <input
            type="text"
            placeholder="Jesse Guererro, Thomas Ortiz, etc."
            value={groupMembers}
            onChange={(e) => setGroupMembers(e.target.value)}
          />
        </label>
        <button className='create-group-button' type="submit">Create Group</button>
      </form>
    
  );
}
