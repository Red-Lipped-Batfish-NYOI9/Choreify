import React from "react";
// import MainContainer from "./containers/MainContainer.jsx";
import Navbar from "./containers/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import KanbanPage from "./pages/KanbanPage.jsx";
import GroupsPage from "./pages/GroupsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
/* eslint-disable import/extensions */
import MainContainer from "./containers/MainContainer.jsx";
import styles from "./stylesheets/App.module.css";

export default function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/kanban" element={<KanbanPage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
      <MainContainer />
    </div>
  );
}
