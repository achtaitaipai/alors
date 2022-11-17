"use client"
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Profile() {
    const supabaseClient = useSupabaseClient()
	const user = useUser()
    const router = useRouter()

    useEffect(()=>{
        if(!user){
            router.push("/")
        }
    },[user,router])

	return (
		<div>
            <span>{user?.email}</span>
            <button
				onClick={async () => {await supabaseClient.auth.signOut()}}
			>
				click here to log out
			</button>
            <Link href={'/create'}>Créer un nouveau sondage</Link>
            <span>Mes sondages :</span>
		</div>
	)
}
