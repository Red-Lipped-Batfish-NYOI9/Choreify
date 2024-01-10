import React from 'react';
import GroupCreationForm from '../components/CreateGroup.jsx';
import '../styles.css';

export default function CreateNewGroup() {
  return (
    <div id="groupCreationForm">
      <h1>Create New Group</h1>
      <GroupCreationForm />
    </div>
  );
}
