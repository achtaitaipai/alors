import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { FormEvent } from 'react'

const Page = () => {
	const supabase = useSupabaseClient()
	const user = useUser()
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget
		const formData = new FormData(form)
		const email = formData.get('email') as string
		const password = formData.get('password') as string
		const signin = await supabase.auth.signInWithPassword({ email, password })
		supabase.auth.refreshSession()
		console.log(signin)
	}

	return (
		<>
			<p>{user?.email}</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">
					email :
					<input type="email" name="email" id="email" value={'charles.Cailleteau@gmail.com'} />
				</label>
				<label htmlFor="password">
					password :
					<input type="password" name="password" id="password" value={'supersecret'} />
				</label>
				<input type="submit" value="sign-in"></input>
			</form>
			<Link href={'/'}>Home</Link>
		</>
	)
}

export default Page
