import React from "react";
import { successStyle } from "./style.css";

interface SuccessProps {
  children: React.ReactNode;
}

const Success: React.FC<SuccessProps> = ({ children }) => (
  <span className={successStyle}>
    👍
    {children}
  </span>
);

export default Success;
