// Login.js
import React, { useState } from "react";
import "./myStyle.css";
import logo from "../images/live-chat.png";
import { Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="Login" />
      </div>
      <div className="login-box">
        <p>Login</p>

        <TextField
          id="standard-basic"
          label="Enter User Name"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

        <Button variant="outlined">Login</Button>
        <Button variant="outlined">Signup</Button>
      </div>
    </div>
  );
};

export default Login;
