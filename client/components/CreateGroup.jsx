/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import '../styles.css';
import { useNavigate } from 'react-router-dom';
import { usePostNewGroupMutation } from '../redux/api/groups/groupsApi';

export default function groupCreationForm() {
  const [groupName, setGroupName] = useState('');
  const [groupMembers, setGroupMembers] = useState('');
  const navigate = useNavigate();

  fetch("/api/users")
    .then(data => data.json())
    .then(res => {
      console.log('GOT USERS ', res);
      let select = document.getElementById("arr");

      for (let i = 0; i < res.length; i++){

        let currElementOption = document.createElement("option");
        currElementOption.textContent = res[i].username;
        currElementOption.value = res[i].username;
        select.appendChild(currElementOption);

      }

    })

  const newGroupHandler = async (e) => {
    e.preventDefault();
    console.log(' groupName ', groupName);
    console.log(' groupMembers ', groupMembers);

    const res = await fetch('/api/createNewGroup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ groupName, groupMembers }),
    });

    const response = await res.json();
    console.log("RESPONSE HERE ", response);
    
  };

  return (
    
      <form onSubmit={newGroupHandler}>
        <label  htmlFor="groupName">
          New Group Name:
          <input
            type="text"
            placeholder="The Savibar Family, Three Blind Mice, Hansel & Gretel, Inc., etc."
            // value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </label>
        <label  htmlFor="memberNames">
          Add Members &#40;First Name, Last Name&#41;:
          <input
            type="text"
            placeholder="Jesse Guererro, Thomas Ortiz, etc."
            // value={groupMembers}
            onChange={(e) => setGroupMembers(e.target.value)}
          />
        </label>
        <select id="arr">
            <option>Select User: </option>
        </select>
        <button className='create-group-button' type="submit">Create Group</button>
      </form>
    
  );
}
