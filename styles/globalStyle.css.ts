import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, *::before, *::after', {
	boxSizing: 'border-box',
	margin: 0,
	padding: 0,
})

globalStyle('html, body', {
	height: '100%',
})

globalStyle('body', {
	fontFamily: "'Roboto', sans-serif",
})

globalStyle('body > div', {
	height: '100%',
})
