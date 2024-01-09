import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styles from "../stylesheets/Navbar.module.css";
import Profile from "../components/Profile.jsx";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/home");
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.applicationAndLogo} onClick={navigateHome}>
        <ApplicationAndLogo />
      </div>
      <div className={styles.links}>
        <ul className={styles.pages}>
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/kanban">Kanban</CustomLink>
          <CustomLink to="/groups">Groups</CustomLink>
          <CustomLink to="/createNewGroup">Create New Group</CustomLink>
      </ul>
      </div>
      <Profile className={styles.profileComponent} />
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);

  const isActive = useMatch({ path: resolvedPath.pathname, end: true }); //Matches an URL and returns bool
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

function ApplicationAndLogo() {
  return <img className={styles.logo} src="../public/assets/logo.jpg" />;
}
