import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default {
	plugins: [vanillaExtractPlugin()],
	define: {
		'process.env': process.env,
	},
}
