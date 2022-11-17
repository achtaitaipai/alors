import { style } from '@vanilla-extract/css'
import { colors } from '../../style/colors/index.css'
import { vars } from '../../style/variables/index.css'

export const wrapperStyle = style({
	display: 'grid',
	gap: vars.sizes[1],
})
export const inputStyle = style({
	paddingInline: vars.sizes[3],
	paddingBlock: vars.sizes[2],
	borderColor: colors.neutral6,
	borderStyle: 'solid',
	borderWidth: 1,
	outline: 0,
	color: colors.neutral11,
	backgroundColor: colors.neutral1,
	borderRadius: vars.sizes.radius1,
	':focus': {
		borderColor: colors.neutral8,
	},
	'::placeholder': {
		color: colors.neutral8,
	},
})

export const labelStyle = style({
	fontSize: vars.typography.size0,
})
