import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className="nav-button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
