import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleOAuthButton from "../components/GoogleOAuthButton.jsx";
export default function LoginPage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }
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
