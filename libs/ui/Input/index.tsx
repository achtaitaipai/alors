import { HTMLInputTypeAttribute } from 'react'
import { inputStyle, labelStyle, wrapperStyle } from './style.css'

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
	label: string
	type: HTMLInputTypeAttribute
	name: string
	placeholder?: string
}

const Input: React.FC<InputProps> = ({ label, type, name, placeholder }, props) => (
	<div className={wrapperStyle}>
		<label htmlFor={name} className={labelStyle}>
			{label}
		</label>
		<input id={name} name={name} {...props} className={inputStyle} type={type} placeholder={placeholder} />
	</div>
)

export default Input
