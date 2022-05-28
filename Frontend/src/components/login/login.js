import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import WebcamCapture from "../webcam/webcam";
import Avatar from "@mui/material/Avatar";

import Box from '@mui/material/Box';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { LockOpen } from "@mui/icons-material";

const Login = ({ setLoginUser }) => {
  const history = useHistory();

  const [image, setImage] = useState();

  const updateImage = (e) => {
    setImage(e);
  };

  const login = () => {
    console.log(image);
    const email = document.getElementsByName("email")[0].value;
    const password = document.getElementsByName("password")[0].value;
    const imageSource = image.split(",")[1];
    const user = {
      email,
      password,
      imageSource,
    };
    axios.post("http://localhost:3001/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };

  return (
    <div className="login">
     <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main", className:"icon"}}>
        <LockOpen />
      </Avatar>
      
      <h1>Login</h1>
      </Box>
      <input type="text" name="email" placeholder="Enter your Email"></input>
      <input
        type="password"
        name="password"
        placeholder="Enter your Password"
      ></input>
      <WebcamCapture onClickMe={updateImage}></WebcamCapture>
      <div className="button" onClick={login}>
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={() => history.push("/register")}>
        Register
      </div>
    </div>
  );
};

export default Login;
