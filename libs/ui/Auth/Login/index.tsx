import Link from 'next/link'

interface SignInProps extends React.HTMLAttributes<HTMLFormElement> {}

const SignIn: React.FC<SignInProps> = props => {
	return (
		<>
			<h2>Login</h2>
			<form {...props}>
				<label htmlFor="email">
					email :
					<input type="text" name="email" id="email" />
				</label>
				<label htmlFor="">
					password :
					<input type="password" name="password" id="password" />
				</label>
				<a href="/auth/for">Forgot Password?</a>
				<input type="submit" value="login" />
			</form>
			<p>
				New to Alors? <Link href="/auth/signup">Register</Link>
			</p>
		</>
	)
}

export default SignIn
