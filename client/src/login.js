import React, { useEffect, useState } from "react";

import "./index.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [wrongCred, setWrongCred] = useState(false);

  Axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const Respond = () => {
    Axios.post("http://localhost:3001/login", {
      username: uname,
      password: pass,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
        setWrongCred(true);
      } else {
        if (response.data[0].type == 1) {
          navigate("/seller/home");
        } else {
          navigate("/home");
        }
        window.location.reload();
        setLoginStatus(response.data[0].username);
      }
    });
  };

  return (
    <div className="loginForm">
      <h1>LOGIN</h1>
      <input
        type="text"
        onChange={(e) => {
          setUname(e.target.value);
        }}
        name="username"
        placeholder="Enter Username"
      ></input>

      <input
        type="password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
        placeholder="Enter Password"
      ></input>
      {wrongCred ? <h6 style={{ color: "red" }}>Wrong Credentials</h6> : ""}
      <button
        class="button-9"
        role="button"
        onClick={() => {
          Respond();
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
