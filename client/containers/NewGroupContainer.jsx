/* eslint-disable import/extensions */
import React from 'react';
import styles from '../stylesheets/Groups.module.css';
import Group from '../components/Group.jsx';
import { useGetAllGroupsQuery } from '../redux/api/groups/groupsApi.js';

export default function NewGroupContainer() {
  // in here, we are going to get the data and then render that into the div
  const { data, error, isLoading } = useGetAllGroupsQuery();

  console.log('groupData', data);

  const groupsArr = [];
  /*
  if (!isLoading) {
    const groupPlaceholder = {};

    for (let i = 0; i < data.length; i++) {
      if(!groupPlaceholder.hasOwnProperty(data[i].group_name)){
        groupPlaceholder[data[i].group_name] = { }
      }
    }


    for (let i = 0; i < data.length; i++) {
      groupsArr.push(<Group key={data[i].group_id} group_name={data[i].group_name} />);
    }
  }
  */

  return (
    <div>
      <h1>All Groups:</h1>
      <div className={styles.newGroupContainer}>
        {isLoading ? 'Loading...' : groupsArr}
      </div>
      <div>This is a button that when clicked will redirect to create a new group</div>
    </div>
  );
}
