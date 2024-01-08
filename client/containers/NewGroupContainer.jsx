/* eslint-disable import/extensions */
import React from 'react';
import styles from '../stylesheets/Groups.module.css';
import Group from '../components/Group.jsx';

export default function NewGroupContainer() {
  // in here, we are going to make a fetch request to get all groups,
  // then we are going to render them into the div below
    


  return (
    <div className={styles.newGroupContainer}>
      this is the NewGroupContainer
      <Group  />
    </div>
  );
}
