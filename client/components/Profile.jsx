import React from "react";
import styles from "../stylesheets/Profile.module.css";
import { useNavigate } from "react-router-dom";
import { selectLoggedUser } from "../redux/slices/usersSlice";
import { useSelector } from "react-redux";

export default function Profile() {
  const loggedInUser = useSelector(selectLoggedUser);
  const navigate = useNavigate();
  function handleClick() {
    navigate("/profile");
  }
  console.log(`loggedInUser `, loggedInUser);
  return (
    <div className={styles.profileModal} onClick={handleClick}>
      <div className={styles.profilePictureDiv}>
        <img
          className={styles.profilePic}
          src={
            loggedInUser?.profile_picture
              ? loggedInUser.profile_picture
              : "../public/assets/blank_profile.jpeg"
          }
          alt=""
        />
      </div>
      <div className={styles.nameAndSettings}>
        <span className={styles.name}>
          {loggedInUser?.username ? loggedInUser?.username : ""}
        </span>
        {/* <span className={styles.settings}>Settings</span> */}
      </div>
    </div>
  );
}
