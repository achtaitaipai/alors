import Link from "next/link";
import React from "react";
import { linkStyle } from "../Auth/Login/style.css";

interface BasicLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const BasicLink: React.FC<BasicLinkProps> = ({ href, children, ...props }) => (
  <a {...props} href={href} className={linkStyle}>
    {children}
  </a>
);

export default BasicLink;
