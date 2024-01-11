/* eslint-disable import/extensions */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles.css';

import { useSelector, useDispatch } from "react-redux";
import { setChoresList } from '../redux/slices/choresSlice.js';

export default function ChoreCard(props) {
  const choreList = useSelector(state => state.chores.choreList);
  // console.log('this is chorelist in chorecard',choreList)
  const dispatch = useDispatch();

 
  const choreCardHandler = (e) => {
    //console.log("chore_status ", chore_status);
    // console.log("props ", props);
    let nextChore;
    if (props.chore_status === 'to-do'){
      nextChore = 'in-progress';
    }
    else if (props.chore_status === 'in-progress'){
      nextChore = 'done';
    }
    let currChoreId = props.chore_id;


    if (props.chore_status === 'done'){
      //deleting
    // console.log("props.key ", currChoreId);
    fetch("api/chores", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([currChoreId])

    })
    .then(data => data.json())
    .then(data => dispatch(setChoresList({choreList: data})))
    }else{

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



    // const dueDate = props.created_date.toLocaleString()
    // const createdDate = props.due_date.toLocaleString()

    // console.log('here are the Dates', dueDate, createdDate )

  }
  
  const createdDate = new Date(props.created_date).toLocaleDateString();;
  const dueDate = new Date(props.due_date).toLocaleDateString();;
  console.log('here are the Dates', dueDate, createdDate )

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
          {createdDate}
        </p>
  
 
        <p>
          Due Date:
          {' '}
          {dueDate}
        </p>

        <button id="chore-progress-button" onClick={choreCardHandler}>{props.button_text} </button>
     
    </div>
  );
}
