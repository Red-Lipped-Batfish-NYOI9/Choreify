/* eslint-disable import/extensions */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles.css';

export default function ChoreCard(props) {

  const choreCardHandler = async (e) => {
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
    const res = await fetch("api/chores", {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([nextChore, currChoreId])


    })

    console.log("RES FROM PATCH ", res);




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

        <button id="chore_card" onClick={choreCardHandler}> Next </button>
     
    </div>
  );
}
