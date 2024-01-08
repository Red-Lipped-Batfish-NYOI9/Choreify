import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD2oEjnqETls6cmFi0pXAJUNbiW7YlLxA",
  authDomain: "chorefy-e8d69.firebaseapp.com",
  projectId: "chorefy-e8d69",
  storageBucket: "chorefy-e8d69.appspot.com",
  messagingSenderId: "410281049296",
  appId: "1:410281049296:web:334e8ab1bc8e2cb986b2d5",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      console.log({
        name: localStorage.name,
        email: localStorage.email,
        profilePic: localStorage.profilePic,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
