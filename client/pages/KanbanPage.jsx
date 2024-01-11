import React, { useEffect } from "react";
import MainContainer from "../containers/MainContainer.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { setChoresList } from '../redux/slices/choresSlice.js';

import { fetchChores } from "../redux/slices/choresSlice.js";
export default function KanbanPage() {

  const dispatch = useDispatch();
  // const chores = useSelector((state) => state.chores.choreList);

  useEffect(async()=>{
    fetch('/api/chores')
    .then(data => data.json())
    .then(data => {
      console.log('dispatching data to render chores on kancban', data)
      dispatch(setChoresList({choreList:data}))})
  },[])


  
  
  return (
    <div>
      <h1>Progress Board</h1>
      <MainContainer />
    </div>
  );
}
