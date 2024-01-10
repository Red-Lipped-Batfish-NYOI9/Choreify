import React from "react";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "./auth/firebase";
import { signInWithGoogle } from "../containers/authentication/firebase";
import { useDispatch } from "react-redux";
import { addLoggedUser } from "../redux/slices/usersSlice";
import { store } from "../redux/store";
import { usePostNewUserMutation } from "../redux/api/users/usersApi";
import styles from "../stylesheets/LoginPage.module.css";


export default function GoogleOAuthButton() {
  const dispatch = useDispatch();
  const postNewUserMutation = usePostNewUserMutation();

  async function handleLogin() {
    let signIn = await signInWithGoogle();

    console.log(`in handle login `, await signIn);

    let newUser = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signIn),
    });

    console.log("newUser ", newUser);
    // const mutationResult = await postNewUserMutation.mutate(signIn);
    // // fetch("/ai/users", { method: "POST", body: JSON.stringify(signIn) });
    // const { data } = mutationResult;
    // // console.log(`new user data: `, data);
    // store.dispatch(addLoggedUser(signIn));
    dispatch(addLoggedUser(signIn));
  }

  return (
    <div>
      <button className={styles.loginButton} onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}
