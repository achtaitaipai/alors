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
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ducimus sint, explicabo quam illum ipsam cumque modi maxime pariatur nostrum iusto sed hic
			saepe ipsum vero? Sit officiis aliquam asperiores?
		</div>
	)
}
