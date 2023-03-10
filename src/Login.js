import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth"
import "./login.css";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
      signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        ></img>
      </div>
      <Button variant="contained" color="primary" onClick={signIn}>
        Login
      </Button>
    </div>
  );
}

export default Login;
