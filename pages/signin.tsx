import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'

const Page = () => {
	const supabase = useSupabaseClient()
	const user = useUser()
	const router = useRouter()
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget
		const formData = new FormData(form)
		const email = formData.get('email') as string
		const password = formData.get('password') as string
		const signin = await supabase.auth.signInWithPassword({ email, password })
		supabase.auth.refreshSession()
		if(!signin.error){
			const {succes_redirect} = router.query
			if(typeof succes_redirect == "string"){
				router.push(succes_redirect)
			}
			else{
				router.push("/create")
			}
		} else{
			alert(signin.error.message)
		}
	}

	return (
		<>
			<p>{user?.email}</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">
					email :
					<input type="email" name="email" id="email" />
				</label>
				<label htmlFor="password">
					password :
					<input type="password" name="password" id="password" />
				</label>
				<input type="submit" value="sign-in"></input>
			</form>
			<Link href={'/'}>Home</Link>
		</>
	)
}

export default Page
