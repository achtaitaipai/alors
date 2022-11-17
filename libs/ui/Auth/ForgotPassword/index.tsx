interface ForgotPasswordProps extends React.HTMLAttributes<HTMLFormElement> {}

import Button from '../../Button'
import { formStyle, wrapperStyle, labelStyle } from './style.css'
import Input from '../../Input'

const ForgotPassword: React.FC<ForgotPasswordProps> = props => (
	<div className={wrapperStyle}>
		<h2>Forgot Password ? 😏</h2>
		<p>{"Don't worry! It happens. Please enter the address associated with your account."}</p>
		<form {...props} className={formStyle}>
			<Input label="email :" placeholder="john@doe.fr" type="text" name="email" />
			<Button>Submit</Button>
		</form>
	</div>
)

export default ForgotPassword
