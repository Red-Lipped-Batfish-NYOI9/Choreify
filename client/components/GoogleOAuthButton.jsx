import React from "react";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "./auth/firebase";
import { signInWithGoogle } from "../containers/authentication/firebase";
export default function GoogleOAuthButton() {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>;
    </div>
  );
}
