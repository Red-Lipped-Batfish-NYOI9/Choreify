/* eslint-disable import/extensions */
import React from "react";
import CreateChore from "../components/CreateChore.jsx";
import ProgressContainer from "./ProgressContainer.jsx";
// import ChoreCard from "../components/ChoreCard.jsx";
import "../styles.css";

import { fetchChores } from "../redux/slices/choresSlice.js";
import { useSelector } from "react-redux";
import { selectAllChores } from "../redux/slices/choresSlice.js";
import { useGetAllChoresQuery } from "../redux/api/chores/choresApi.js";

export default function MainContainer() {
  const { data, error, isLoading } = useGetAllChoresQuery();
  return (
    <div>
      <h1>Choreify!</h1>
      <div id="swimLanes">
        <CreateChore />
        <ProgressContainer progress="To Do" />
        <ProgressContainer progress="In Progress" />
        <ProgressContainer progress="Done" />
        {/* {isLoading ? 'Loading...' : JSON.stringify(data)} */}
      </div>
    </div>
  );
}
