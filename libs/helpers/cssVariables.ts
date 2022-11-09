type CSSVariables = { [key: string]: string }

export const cssVariables = (vars: CSSVariables) =>
	Object.entries(vars).reduce<React.CSSProperties>((acc, el) => {
		const style = cssVariable(...el)
		return { ...acc, ...style }
	}, {})

const cssVariable = (key: string, value: string) => ({ [key]: value } as React.CSSProperties)
