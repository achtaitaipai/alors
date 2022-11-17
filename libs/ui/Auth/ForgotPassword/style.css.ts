import { colors } from '../../../style/colors/index.css'
import { style } from '@vanilla-extract/css'
import { vars } from '../../../style/variables/index.css'

export const formStyle = style({
	display: 'grid',
	gap: vars.sizes[5],
})

export const wrapperStyle = style({
	display: 'grid',
	background: colors.gradient1,
	backgroundColor: colors.neutral1,
	color: colors.neutral12,
	justifyItems: 'center',
	alignContent: 'space-between',
	gap: '1rem',
	width: vars.sizes[14],
	// height: vars.sizes[14],
	paddingBlock: vars.sizes[7],
	paddingInline: vars.sizes[6],
	borderColor: colors.neutral6,
	borderWidth: 1,
	borderStyle: 'solid',
	borderRadius: vars.sizes.radius2,
	overflow: 'hidden',
})

export const labelStyle = style({
	display: 'flex',
	gap: '1rem',
})
