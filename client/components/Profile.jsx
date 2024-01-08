import React from "react";
import styles from "../stylesheets/Profile.module.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/profile");
  }
  return (
    <div className={styles.profileModal} onClick={handleClick}>
      <div className={styles.profilePictureDiv}>
        <img
          className={styles.profilePic}
          src={localStorage.profilePic ? localStorage.profilePic : "?"}
          alt=""
        />
      </div>
      <div className={styles.nameAndSettings}>
        <span className={styles.name}>Name</span>
        <span className={styles.settings}>settings</span>
      </div>
    </div>
  );
}
