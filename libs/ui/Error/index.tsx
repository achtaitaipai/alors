import React from "react";
import { errorStyle } from "./style.css";

interface ErrorProps {
  children: React.ReactNode;
  title?: string;
}

const Error: React.FC<ErrorProps> = ({ children, title = "Error" }) => (
  <span className={errorStyle}>
    🚩 <b>{title} : </b>
    {children}
  </span>
);

export default Error;
