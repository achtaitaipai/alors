interface ResetPasswordProps extends React.HTMLAttributes<HTMLFormElement> {}

const ResetPassword: React.FC<ResetPasswordProps> = props => (
	<>
		<h2>Reset Password</h2>
		<form {...props}>
			<label htmlFor="password">
				New Password :
				<input type="password" name="password" id="password" />
			</label>
			<label htmlFor="confirm-password">
				Confirm new password :
				<input type="password" name="confirm-password" id="confirm-password" />
			</label>
			<input type="submit" value="Submit" />
		</form>
	</>
)

export default ResetPassword
