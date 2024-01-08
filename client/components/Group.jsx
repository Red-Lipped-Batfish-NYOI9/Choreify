/* eslint-disable import/extensions */
import React from 'react';
import styles from '../stylesheets/Groups.module.css';

export default function Group() {
  // in here, we are going to make a fetch request to get all groups,
  // then we are going to render them into the div below

  return (
    <div className={styles.groupInfoCard}>
      <h3>Group Name</h3>
      <div className={styles.columnHolder}>
        <div className={styles.column}>
          Member Name
          <div className={styles.box}>Member 1</div>
          <div className={styles.box}>Member 2</div>
          <div className={styles.box}>Member 3</div>
          <div className={styles.box}>Member 4</div>
        </div>
        <div className={styles.column}>
          Member role
          <div className={styles.box}>Admin</div>
          <div className={styles.box}>User</div>
          <div className={styles.box}>User</div>
          <div className={styles.box}>User</div>
        </div>
      </div>
    </div>
  );
}
