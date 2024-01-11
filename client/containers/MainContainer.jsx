/* eslint-disable import/extensions */
import React from "react";
import CreateChore from "../components/CreateChore.jsx";
import ProgressContainer from "./ProgressContainer.jsx";
// import ChoreCard from "../components/ChoreCard.jsx";
import ChoreCard from "../components/ChoreCard.jsx";
import "../styles.css";

import { fetchChores } from "../redux/slices/choresSlice.js";
import { useSelector } from "react-redux";
import { selectAllChores } from "../redux/slices/choresSlice.js";
import { useGetAllChoresQuery } from "../redux/api/chores/choresApi.js";

export default function MainContainer() {
 
  const choreList = useSelector(state => state.chores.choreList);

    console.log("CHORELIST HERE ", choreList)
    let choreCards = [];
    let choreCardsToDo = [];
    let choreCardsInProgress = [];
    let choreCardsDone = [];
    for (let i = 0; i < choreList.length; i++){
        if (choreList[i].chore_status === 'to-do'){
            choreCardsToDo.push(<ChoreCard chore_id={choreList[i].chore_id} chore_status={choreList[i].chore_status} title={choreList[i].title} description={choreList[i].description} due_date={choreList[i].due_date} created_date={choreList[i].created_date}/>);
        }
        if (choreList[i].chore_status === 'in-progress'){
            choreCardsInProgress.push(<ChoreCard chore_id={choreList[i].chore_id} title={choreList[i].title} description={choreList[i].description} due_date={choreList[i].due_date} created_date={choreList[i].created_date}/>);
        }
        if (choreList[i].chore_status === 'done'){
            choreCardsDone.push(<ChoreCard chore_id={choreList[i].chore_id} title={choreList[i].title} description={choreList[i].description} due_date={choreList[i].due_date} created_date={choreList[i].created_date}/>);
        }
        //choreCards.push(<ChoreCard title={choreList[i].title} description={choreList[i].description} due_date={choreList[i].due_date} created_date={choreList[i].created_date}/>);
    }
    //console.log("choreCardsInProgress ", choreCardsInProgress)
  return (
    <div>
      {/* <h1>Choreify!</h1> */}
      <div id="swimLanes">
        <CreateChore />
        <ProgressContainer choreList={choreCardsToDo} progress="To Do" />
        <ProgressContainer choreList={choreCardsInProgress} progress="In Progress" />
        <ProgressContainer choreList={choreCardsDone} progress="Done" />
        {/* {isLoading ? 'Loading...' : JSON.stringify(data)} */}
      </div>
    </div>
  );
}
