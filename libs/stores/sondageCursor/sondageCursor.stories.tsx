import { useMemo } from 'react'
import { useCursorStore } from '.'

interface Props {
	id: string
}

const Cursor: React.FC<Props> = ({ id }) => {
	const cursors = useCursorStore(state => state.cursors)
	const value = useMemo(() => cursors[id], [cursors, id])
	const incr = useCursorStore(state => state.incrCursor)
	const newCursor = useCursorStore(state => state.addCursor)

	const handleClick = () => {
		if (value !== undefined) incr(id)
		else newCursor(id)
	}

	return (
		<div style={{ border: '1px solid black' }}>
			<h3>cursor : {id}</h3>
			<p>value : {value ?? 'aucune'}</p>
			<button onClick={() => handleClick()}>incrémenter</button>
		</div>
	)
}

export const story = () => (
	<>
		<Cursor id="1" />
		<Cursor id="2" />
		<Cursor id="3" />
		<Cursor id="2" />
		<Cursor id="1" />
	</>
)
story.storyName = 'SondageCursor'
