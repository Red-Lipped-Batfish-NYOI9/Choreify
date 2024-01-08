import React from "react";

export default function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <img src={localStorage.profilePic} />
        <div>
          <strong>Name:</strong> {localStorage.name}
        </div>
        <div>
          <strong>Email:</strong> {localStorage.email}
        </div>
      </div>
    </div>
  );
}
