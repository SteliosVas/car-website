import React from "react";
import "./SignUp.css";
import "./Button.css";
import Button from "./Button";

const SignUp = (props) => {
  return (
    <form className="signup-container" onConfirm={props.onConfirm}>
      <h1>{props.title}</h1>
      <div className="signup-form">
        <label htmlFor="email">Username:</label>
        <input
          className="input-user"
          type="email"
          placeholder="enter username"
        ></input>
        <br />
        <label>Password:</label>
        <input
          className="input-pin"
          type="text"
          placeholder="enter password"
        ></input>
        <br />
        <Button className="signup-button">Sign in!</Button>
        <Button className="signup-button" onClick={props.onConfirm}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
