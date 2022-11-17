"use client"
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Create() {
	//const supabaseClient = useSupabaseClient()
	const user = useUser()
    const router = useRouter()

    useEffect(()=>{
        if(!user){
            router.push("/signin?succes_redirect=/create")
        }
    },[user,router])

	return (
		<div>
			<button>Ajouter des photos</button>
		</div>
	)
}
