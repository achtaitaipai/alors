import Link from 'next/link'

interface SignUpProps extends React.HTMLAttributes<HTMLFormElement> {}

const SignUp: React.FC<SignUpProps> = props => {
	return (
		<>
			<h2>Sign Up</h2>
			<form {...props}>
				<label htmlFor="email">
					Email :
					<input type="text" name="email" id="email" />
				</label>
				<label htmlFor="password">
					Password :
					<input type="password" name="password" id="password" />
				</label>
				<label htmlFor="confirm-password">
					Confirm password :
					<input type="password" name="confirm-password" id="confirm-password" />
				</label>
				<input type="submit" value="continue" />
			</form>
			<p>
				Joined us before ? <Link href={'/auth/login'}>Login</Link>
			</p>
		</>
	)
}

export default SignUp
