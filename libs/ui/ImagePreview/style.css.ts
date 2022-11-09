import { createVar, style } from '@vanilla-extract/css'

export const transformVars = createVar()

export const ImagePreviewStyle = style({
	position: 'relative',
	width: '100%',
	// border: '1px solid black',
	// petite feinte pour élargir la zone de la souris
	margin: -50,
	padding: 50,
	transformOrigin: '50% 50%',
	transform: 'perspective(800px) rotateY(calc(var(--mouseX) * 10deg)) rotateX(calc(var(--mouseY) * 10deg))',
	transition: 'transform .3s',
	':before': {
		content: '',
		position: 'absolute',
		inset: 50,
		background: 'black',
		zIndex: -1,
		transform: 'translate(calc(var(--mouseX) * -10px),calc(var(--mouseY) * 10px))',
		transition: 'transform .3s',
		filter: 'blur(5px)',
		opacity: 0.5,
	},
})

export const ImageStyle = style({
	display: 'block',
	objectFit: 'contain',
	width: '100%',
	height: '100%',
})
export const LegendStyle = style({
	background: 'white',
	padding: '1rem',
	fontFamily: 'sans-serif',
})
