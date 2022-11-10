import type { GlobalProvider } from '@ladle/react'

export const Provider: GlobalProvider = ({ children }) => (
	<div
		style={{
			width: '100%',
			height: '100%',
			display: 'grid',
			placeItems: 'center',
		}}
	>
		{children}
	</div>
)
