/* eslint-disable import/extensions */
import React from 'react';
import styles from '../stylesheets/Groups.module.css';
import Group from '../components/Group.jsx';

export default function NewGroupContainer() {
  // in here, we are going to get the data and then render that into the div

  return (
    <div className={styles.newGroupContainer}>
      <h1>All Groups:</h1>
      <Group />
      <Group />
      <Group />
      <Group />
      <Group />
      <Group />
      <div>This is abutton that when clicked will redirect to create a new group</div>
    </div>
  );
}
