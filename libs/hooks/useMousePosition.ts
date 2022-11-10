import { useEffect, useState } from 'react'

type Position = [number, number]

export const useMousePosition = (ref: React.RefObject<HTMLElement>) => {
	const [mousePositon, setMousePosition] = useState<Position>([0, 0])

	const handleMouseMove = (e: MouseEvent) => {
		const element = e.target as HTMLElement
		if (!element) return
		const { left, top, width, height } = element.getBoundingClientRect()
		const centerX = left + width / 2
		const centerY = top + height / 2
		const x = (e.clientX - centerX) / (width / 2)
		const y = (centerY - e.clientY) / (height / 2)
		setMousePosition([x, y])
	}

	const handleMouseOut = () => setMousePosition([0, 0])

	useEffect(() => {
		const element = ref.current
		if (!element) return
		element.addEventListener('mousemove', handleMouseMove)
		element.addEventListener('mouseout', handleMouseOut)
		return () => {
			element.removeEventListener('mousemove', handleMouseMove)
			element.removeEventListener('mouseout', handleMouseOut)
		}
	}, [ref])

	return mousePositon
}
