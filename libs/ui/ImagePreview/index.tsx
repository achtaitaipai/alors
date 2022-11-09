import React, { MouseEventHandler, useMemo, useState } from 'react'
import { cssVariables } from '../../helpers/cssVariables'
import { ImagePreviewStyle, ImageStyle, LegendStyle } from './style.css'

interface ImagePreviewProps {
	src: string
}

type Position = [number, number]

const ImagePreview: React.FC<ImagePreviewProps> = ({ src }) => {
	const [mousePositon, setMousePosition] = useState<Position>([0, 0])

	const style = useMemo(() => {
		const [rx, ry] = mousePositon
		return cssVariables({ '--mouseX': rx.toString(), '--mouseY': ry.toString() })
	}, [mousePositon])

	const handleMouseMove: MouseEventHandler<HTMLElement> = e => {
		const element = e.currentTarget
		const { left, top, width, height } = element.getBoundingClientRect()
		const centerX = left + width / 2
		const centerY = top + height / 2
		const x = (e.clientX - centerX) / (width / 2)
		const y = (centerY - e.clientY) / (height / 2)
		setMousePosition([x, y])
	}

	const resetMousePosition = () => {
		setMousePosition([0, 0])
	}

	return (
		<figure style={style} className={ImagePreviewStyle} onMouseMove={handleMouseMove} onMouseOut={resetMousePosition}>
			<img src={src} className={ImageStyle} />
			<figcaption className={LegendStyle}> Titre </figcaption>
		</figure>
	)
}

export default ImagePreview
