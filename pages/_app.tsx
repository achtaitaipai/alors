import '@fontsource/roboto'
import '../styles/globalStyle.css'
import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { light } from '../libs/style/colors/index.css'
import { containerStyle } from '../styles/layouts/container.css'

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
				<Component {...pageProps} />
			</SessionContextProvider>
		</div>
	)
}
