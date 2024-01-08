/* eslint-disable import/extensions */
import React from 'react';
import styles from '../stylesheets/Groups.module.css';
import Group from '../components/Group.jsx';
import { useGetAllGroupsQuery } from '../redux/api/groups/groupsApi.js';

export default function NewGroupContainer() {
  // in here, we are going to get the data and then render that into the div
  const { data, error, isLoading } = useGetAllGroupsQuery();

  //console.log(data);

  return (
    <div>
      <h1>All Groups:</h1>
      <div className={styles.newGroupContainer}>
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
      </div>
      <div>This is abutton that when clicked will redirect to create a new group</div>
    </div>
  );
}
