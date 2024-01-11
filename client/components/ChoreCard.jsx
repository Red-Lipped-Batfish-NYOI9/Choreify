/* eslint-disable import/extensions */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles.css';

import { useSelector, useDispatch } from "react-redux";
import { setChoresList } from '../redux/slices/choresSlice.js';

export default function ChoreCard(props) {
  const choreList = useSelector(state => state.chores.choreList);
  console.log('this is chorelist in chorecard',choreList)
  const dispatch = useDispatch();
 
  const choreCardHandler = (e) => {
    //console.log("chore_status ", chore_status);
    console.log("props ", props);
    let nextChore;
    if (props.chore_status === 'to-do'){
      nextChore = 'in-progress';
    }
    else if (props.chore_status === 'in-progress'){
      nextChore = 'done';
    }
    let currChoreId = props.chore_id;
    console.log("props.key ", currChoreId);
    fetch("api/chores", {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([nextChore, currChoreId])

    })
    .then(data => data.json())
    .then(data => dispatch(setChoresList({choreList: data})))

    // console.log("RES FROM PATCH ", res);




  }

  return (
    <div id="lane">
      <h2>Chores Not Started</h2>
 
        <p>
          Chore:
          {' '}
          {props.title}
        </p>
   

        <p>
          Description:
          {' '}
          {props.description}
        </p>
  
  
        <p>
          Created Date:
          {' '}
          {props.created_date}
        </p>
  
 
        <p>
          Due Date:
          {' '}
          {props.due_date}
        </p>

        <button id="chore-progress-button" onClick={choreCardHandler}> Next </button>
     
    </div>
  );
}
