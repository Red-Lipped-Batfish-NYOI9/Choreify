/* eslint-disable import/extensions */
import React from 'react';
import styles from '../stylesheets/Groups.module.css';

export default function Group(props) {
  const members = [];
  const roles = [];

  for (let i = 0; i < props.members.length; i++) {
    members.push(<div className={styles.box} key={props.members[i]}>{props.members[i]}</div>);
    roles.push(<div className={styles.box} key={`${props.members[i]}-role`}>User</div>);
  }
  return (
    <div className={styles.groupInfoCard}>
      <h2>{props.group_name}</h2>
      <div className={styles.columnHolder}>
        <div className={styles.column}>
        <div className={styles.box_header}>Member Name</div>
          {members}
        </div>
        <div className={styles.column}>
          <div className={styles.box_header}>Role</div>
          {roles}
        </div>
      </div>
    </div>
  );
}
