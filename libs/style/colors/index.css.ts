import { createThemeContract, createTheme, style } from '@vanilla-extract/css'

import { colorSystem, darkGradients, lightGradients } from './datas'

export const colors = createThemeContract({ ...colorSystem.light, ...lightGradients })

export const light = createTheme(colors, { ...colorSystem.light, ...lightGradients })

export const dark = createTheme(colors, { ...colorSystem.dark, ...darkGradients })
