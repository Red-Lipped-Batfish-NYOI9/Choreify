/* eslint-disable import/extensions */
import React from 'react';
import styles from '../stylesheets/Groups.module.css';

export default function Group(props) {
  return (
    <div className={styles.groupInfoCard}>
      <h3>{/*props.group_name*/'name'}</h3>
      <div className={styles.columnHolder}>
        <div className={styles.column}>
          Member Name
          <div className={styles.box}>Member 1</div>
          <div className={styles.box}>Member 2</div>
        </div>
        <div className={styles.column}>
          Member role
          <div className={styles.box}>Admin</div>
          <div className={styles.box}>User</div>
        </div>
      </div>
    </div>
  );
}
