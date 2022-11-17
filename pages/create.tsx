import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Create() {
	const supabaseClient = useSupabaseClient()
	const user = useUser()
    const router = useRouter()

    if(!user){
        router.push("/login")
    }

	return (
		<div>
			<button>Ajouter des photos</button>
		</div>
	)
}
