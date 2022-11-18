import React from "react";
import { linkStyle } from "./style.css";

interface BasicLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof linkStyle;
}

const BasicLink: React.FC<BasicLinkProps> = ({
  href,
  children,
  variant = "primary",
  ...props
}) => (
  <a {...props} href={href} className={linkStyle[variant]}>
    {children}
  </a>
);

export default BasicLink;
