import { buttonStyle } from './style.css'
import React from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }, props) => (
	<button className={buttonStyle} {...props}>
		{children}
	</button>
)

export default Button
