import { style } from '@vanilla-extract/css'
import { url } from 'inspector'
import { colors } from '../../style/colors/index.css'
import { vars } from '../../style/variables/index.css'

export const footerStyle = style({
	width: '100vw',
	padding: '5px',
	background: colors.brand4,
	color: colors.neutral12,
	fontSize: '1rem',
	display:'flex',
	alignItems:'center',
	marginTop:'auto'
})

export const footerLogoStyle = style({
	width: '60px',
	height: '60px',
	padding: '5px',
	backgroundImage: "url('/alorsV1ps.png')",
	backgroundSize: 'contain',
	display: 'block',
	marginRight:'auto'
})

export const footerLinkStyle = style({
	paddingRight: '20px',
	background: colors.brand4,
	color: colors.neutral8,
	fontSize: '1rem'
})