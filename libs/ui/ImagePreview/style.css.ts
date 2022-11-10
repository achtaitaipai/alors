import { style } from '@vanilla-extract/css'

export const wrapperStyle = style({
	width: '100%',
	position: 'relative',
})

export const ImagePreviewStyle = style({
	position: 'relative',
	width: '100%',
	padding: 0,
	margin: 0,
	transformOrigin: '50% 50%',
	transform: 'perspective(1000px) rotateY(calc(var(--mouseX) * 15deg)) rotateX(calc(var(--mouseY) * 15deg))',
	transition: 'transform .3s',
	':before': {
		content: '',
		position: 'absolute',
		inset: 0,
		background: 'black',
		zIndex: -1,
		transform: 'translate(calc(var(--mouseX) * -10px),calc(var(--mouseY) * 10px))',
		transition: 'transform .3s',
		filter: 'blur(5px)',
		opacity: 0.5,
	},
})

export const mouseSensibleStyle = style({
	position: 'absolute',
	inset: -80,
	// pointerEvents: 'none',
	// border: '1px solid black',
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
