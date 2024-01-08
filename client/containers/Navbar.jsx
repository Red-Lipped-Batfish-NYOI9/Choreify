import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styles from "../stylesheets/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* <Link to="/">Price Hub</Link> */}
      {/* <Link to="/1">Teste</Link> */}
      <ul className={styles.pages}>
        <CustomLink to="/">Login</CustomLink>
        <CustomLink to="/kanban">Kanban</CustomLink>
        <CustomLink to="/groups">Groups</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
      </ul>
      <LoginInModal />
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

function LoginInModal() {
  return <div className={styles.loginModal}>Login</div>;
}
