import React, { useMemo, useRef } from 'react'
import { cssVariables } from '../../helpers/cssVariables'
import { useMousePosition } from '../../hooks/useMousePosition'
import { ImagePreviewStyle, ImageStyle, LegendStyle, mouseSensibleStyle, wrapperStyle } from './style.css'

interface ImagePreviewProps {
	src: string
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ src }) => {
	const ref = useRef<HTMLDivElement>(null)
	const mousePosition = useMousePosition(ref)

	const style = useMemo(() => {
		const [rx, ry] = mousePosition
		return cssVariables({ '--mouseX': rx.toString(), '--mouseY': ry.toString() })
	}, [mousePosition])

	return (
		<div className={wrapperStyle}>
			<figure style={style} className={ImagePreviewStyle}>
				<img src={src} className={ImageStyle} />
				<figcaption className={LegendStyle}> Titre </figcaption>
			</figure>
			<div className={mouseSensibleStyle} ref={ref} />
		</div>
	)
}

export default ImagePreview
