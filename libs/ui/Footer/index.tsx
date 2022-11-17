// import { buttonStyle } from './style.css'
import Link from 'next/link'
import React from 'react'



const Footer = () => (
	<footer >
        <Link href="/">App Logo</Link>
		<Link href="/about">About</Link>
		<Link href="/legal">Legal</Link>
	</footer>
)

export default Footer
