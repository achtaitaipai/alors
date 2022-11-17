import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import Login from '../libs/ui/Auth/Login'

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
			router.push("/create")
		} else{
			alert(signin.error.message)
		}
	}

	return (
		<Login onSubmit={handleSubmit}/>
	)
}

export default Page
