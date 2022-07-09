import React from "react";

import "./Button.css";

const Button = (props) => {
  const cls = "btn " + props.className;
  return (
    <button
      type="button"
      className={cls}
      onClick={props.click}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default Button;
