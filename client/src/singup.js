import React, { useState } from "react";
import "./index.css";
import Axios from "axios";
function Signup() {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  Axios.defaults.withCredentials = true;
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: uname,
      password: pass,
      name: name,
      type: user,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <form className="loginForm">
      <h1>Signup</h1>
      <input
        type="text"
        name="username"
        onChange={(e) => {
          setUname(e.target.value);
        }}
        placeholder="Enter Username"
      ></input>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      ></input>

      <select
        id="user"
        name="user"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      >
        <option value="sel">User Type</option>
        <option value="buyer">buyer</option>
        <option value="seller">seller</option>
      </select>

      <button class="button-9" role="button" type="submit" onClick={register}>
        Sign Up
      </button>
    </form>
  );
}

export default Signup;
