import React, { useState } from 'react';
import '../styles.css';

export default function groupCreationForm() {
  const [groupName, setGroupName] = useState('');
  const [groupMembers, setGroupMembers] = useState('');

  const newGroupHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
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
        <button type="submit">Create Group</button>
      </form>
    </div>
  );
}
