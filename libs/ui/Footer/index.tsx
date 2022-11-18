import { footerStyle, footerLinkStyle, footerLogoStyle } from './style.css'
import Link from 'next/link'
import React from 'react'

const Footer = () => (
	<footer className={footerStyle} >
        <Link className={footerLogoStyle} href="/"></Link>
		<Link className={footerLinkStyle} href="/about">About</Link>
		<Link className={footerLinkStyle} href="/legal">Legal</Link>
	</footer>
)

export default Footer
