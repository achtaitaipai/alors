import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

export default function Home() {
	const supabaseClient = useSupabaseClient()
	const user = useUser()

	return (
		<div>
			<pre>{user?.email}</pre>
			<button
				onClick={async () => {
					await supabaseClient.auth.signOut()
				}}
			>
				click here to log out
			</button>
		</div>
	)
}
