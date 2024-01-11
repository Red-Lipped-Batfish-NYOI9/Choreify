import React from "react";
import MainContainer from "../containers/MainContainer.jsx";
import { useDispatch } from 'react-redux';

import { fetchChores } from "../redux/slices/choresSlice.js";
export default function KanbanPage() {
  
  return (
    <div>
      <h1>Progress Board</h1>
      <MainContainer />
    </div>
  );
}
