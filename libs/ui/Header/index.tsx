// import { buttonStyle } from './style.css'
import Link from 'next/link'
import React from 'react'
import { useUser } from '@supabase/auth-helpers-react'


const Header = () => {

    const user = useUser()

    return (
        <header >
            <Link href="/">App Logo</Link>
            {user ? 
                <Link href="/profile">My account</Link>
                :
                <Link href="/signin?succes_redirect=/create">Sign in</Link>
            }
        </header>
    )
}

export default Header
