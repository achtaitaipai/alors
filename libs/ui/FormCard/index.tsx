import { User } from "@supabase/supabase-js";
import React from "react";
import { formCardStyle } from "./style.css";

interface FormCardProps {
  children: React.ReactNode;
}

const FormCard: React.FC<FormCardProps> = ({ children }) => {
  return <div className={formCardStyle}>{children}</div>;
};

export default FormCard;
