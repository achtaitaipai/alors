import { style } from '@vanilla-extract/css'
import { colors } from '../../libs/style/colors/index.css'

export const containerStyle = style({
	display: 'flex',
	flexDirection: 'column',
	minHeight: "100%",
	backgroundColor: colors.neutral2,
})
