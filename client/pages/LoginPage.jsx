import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoogleOAuthButton from "../components/GoogleOAuthButton.jsx";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // function handleClick() {
  //   navigate("/home");
  // }

  // useEffect(() => {
  // dispatch(
  //   addLoggedUser({
  //     username: name,
  //     email: email,
  //     profile_picture: profilePic,
  //   })
  // );

  //   const newUser = usePostNewUserMutation({
  //     username: "test",
  //     email: "testemail",
  //     profile_picture:
  //       "https://lh3.googleusercontent.com/a/ACg8ocL2FBrj9ojOtjMTOw7g3bv1dOymA_FpG4J2a8uk-Y3M65E=s96-c",
  //   });
  // }, [user]);

  return (
    <div>
      <div>
        <h1>Login here:</h1>
        <GoogleOAuthButton />
        {/* <button onClick={handleClick}>Login in with Google</button>; */}
      </div>
    </div>
  );
}

// function useLogoutTimer() {
//   const userIsInactive = useFakeInactiveUser();

//   useEffect(() => {
//     if (userIsInactive) {
//       fake.logout();
//       navigate("/session-timed-out");
//     }
//   }, [userIsInactive]);
// }
