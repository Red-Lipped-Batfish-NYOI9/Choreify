import React from 'react';
import GroupCreationForm from '../components/CreateGroup.jsx';
import '../styles.css';

export default function CreateNewGroup() {
  return (
    <div id="groupCreationForm">
      <h1>New Group Creation</h1>
      <GroupCreationForm />
    </div>
  );
}
