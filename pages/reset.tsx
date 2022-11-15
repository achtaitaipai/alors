import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { GetServerSideProps } from 'next'
import React from 'react'
import { supabase } from '../libs/supabase'
import { parseBody } from 'next/dist/server/api-utils/node'
interface PageProps {}

const Page: React.FC<PageProps> = () => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		// e.preventDefault()
		// const form = e.currentTarget
		// const formDatas = new FormData(form)
		// const email = formDatas.get('email')
		// console.log({ email })
	}

	return (
		<form onSubmit={handleSubmit} method="POST" action="/api/reset">
			<label htmlFor="email">
				email :
				<input type="email" name="email" id="email" />
			</label>
			<input type="submit" value="reset password" />
		</form>
	)
}

export default Page
