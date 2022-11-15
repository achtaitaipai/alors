import { FormEvent } from 'react'
import { supabase } from '../libs/supabase'

const Page = () => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget
		const formData = new FormData(form)
		const email = formData.get('email') as string
		const password = formData.get('password') as string
		supabase.auth.signUp({ email, password })
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="email">
				email :
				<input type="email" name="email" id="email" />
			</label>
			<label htmlFor="password">
				password :
				<input type="password" name="password" id="password" />
			</label>
			<input type="submit" value="sign-up"></input>
		</form>
	)
}

export default Page
