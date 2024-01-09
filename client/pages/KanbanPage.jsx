import React from "react";
import MainContainer from "../containers/MainContainer.jsx";

import { fetchChores } from "../redux/slices/choresSlice.js";
export default function KanbanPage() {
  return (
    <div>
      <h1>Kanban Page</h1>
      <MainContainer />
    </div>
  );
}
