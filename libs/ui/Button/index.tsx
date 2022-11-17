import { buttonStyle } from "./style.css";
import React from "react";
import Spinner from "../Spinner";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  busy?: boolean;
}

const Button: React.FC<ButtonProps> = ({ busy = false, children }, props) => (
  <button
    className={buttonStyle}
    {...props}
    style={busy ? { cursor: "progress", opacity: "0.5" } : {}}
  >
    <Spinner
      style={{
        opacity: busy ? "1" : "0",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      }}
    />
    <div style={{ opacity: busy ? "0" : "1" }}>{children}</div>
  </button>
);

export default Button;
