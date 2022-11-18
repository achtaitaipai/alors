import Link from "next/link";
import BasicLink from "../BasicLink";
import { footerLogoStyle, footerStyle } from "./style.css";

const Footer = () => (
  <footer className={footerStyle}>
    <Link className={footerLogoStyle} href="/"></Link>
    <BasicLink href="/about">About</BasicLink>
    <BasicLink href="/legal">Legal</BasicLink>
  </footer>
);

export default Footer;
