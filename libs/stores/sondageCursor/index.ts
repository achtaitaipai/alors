import create from 'zustand'
import { persist } from 'zustand/middleware'

type Cursors = Record<string, number>

type State = {
	cursors: Cursors
	addCursor: (cursorId: string) => void
	incrCursor: (cursorId: string) => void
}

const addCursor = (cursorId: string, cursors: Cursors) => {
	const newCursors = { ...cursors }
	newCursors[cursorId] = 0
	console.log(newCursors)
	return newCursors
}

const incrCursor = (cursorId: string, cursors: Cursors) => {
	const newCursors = { ...cursors }
	if (newCursors[cursorId] !== undefined) newCursors[cursorId]++
	return newCursors
}

export const useCursorStore = create<State>()(
	persist(
		(set, get) => ({
			cursors: {},
			addCursor: cursorId => set(state => ({ ...state, cursors: addCursor(cursorId, state.cursors) })),
			incrCursor: cursorId => set(state => ({ ...state, cursors: incrCursor(cursorId, state.cursors) })),
		}),
		{
			name: 'cursors',
		}
	)
)
