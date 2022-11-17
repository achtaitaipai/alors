import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import React from 'react'
import { supabase } from '../libs/supabase'
interface PageProps {}

const Page: React.FC<PageProps> = () => {
	const user = useUser()
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget
		const formDatas = new FormData(form)
		const resetPasswordResponse = await fetch('/api/reset', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ email: formDatas.get('email') }),
		})
	}

	const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget
		const formDatas = new FormData(form)
		const password = formDatas.get('password') as string
		const confirmPassword = formDatas.get('confirm-password')
		if (!password || password !== confirmPassword) return
		const update = await supabase.auth.updateUser({ password })
		console.log(update)
	}

	if (!user)
		return (
			<form onSubmit={handleSubmit} method="POST" action="/api/reset">
				<label htmlFor="email">
					email :
					<input type="email" name="email" id="email" />
				</label>
				<input type="submit" value="reset password" />
			</form>
		)
	return (
		<form onSubmit={updateUser}>
			<label htmlFor="password">
				password :
				<input type="password" name="password" id="password" />
			</label>
			<label htmlFor="confirm-password">
				confirm password :
				<input type="password" name="confirm-password" id="confirm-password" />
			</label>
			<input type="submit" value="sign-in"></input>
		</form>
	)
}

export default Page
