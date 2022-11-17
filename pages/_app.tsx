import '@fontsource/roboto'
import '../styles/globalStyle.css'
import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session, useUser } from '@supabase/auth-helpers-react'
import { use, useState, useEffect } from 'react'
import { light } from '../libs/style/colors/index.css'
import { containerStyle } from '../styles/layouts/container.css'
import Header from '../libs/ui/Header'
import Footer from '../libs/ui/Footer'

export default function App({
	Component,
	pageProps,
}: AppProps<{
	initialSession: Session
}>) {
	const [supabaseClient] = useState(() => createBrowserSupabaseClient())
	return (
		<div className={light + ' ' + containerStyle}>
			<SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
				<Header />
				<Component {...pageProps} />
				<Footer	/>
			</SessionContextProvider>
		</div>
	)
}
