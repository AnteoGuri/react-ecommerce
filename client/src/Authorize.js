import React, { useState, useEffect } from "react";
import "./App.css";
import Signup from "./singup.js";
import Login from "./login.js";

function Authorize() {
  const [state, setState] = useState("true");

  return (
    <div className="auth">
      {state ? <Login /> : <Signup />}
      {state ? (
        <button
          className="changeBtn"
          onClick={() => {
            setState((state) => !state);
          }}
        >
          Signup Instead
        </button>
      ) : (
        <button
          className="changeBtn"
          onClick={() => {
            setState((state) => !state);
          }}
        >
          Login Instead
        </button>
      )}
    </div>
  );
}

export default Authorize;
