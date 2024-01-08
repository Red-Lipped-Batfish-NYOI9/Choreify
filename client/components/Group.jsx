/* eslint-disable import/extensions */
import React from 'react';
import styles from '../stylesheets/Groups.module.css';

export default function Group(props) {
  // in here, we are going to make a fetch request to get all groups,
  // then we are going to render them into the div below

  return (
    <div className={styles.groupInfoCard}>
      <div>Group Name</div>
      <div>
        <div>Member Name</div>
        <div>Member role</div>
      </div>
    </div>
  );
}
