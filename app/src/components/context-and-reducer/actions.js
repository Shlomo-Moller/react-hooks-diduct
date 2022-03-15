import { ADD_TODO, REMOVE_TODO, TOGGLE_DONE } from './types'

export const addTodo = label => ({
	type: ADD_TODO,
	payload: {
		label
	}
})

export const removeTodo = id => ({
	type: REMOVE_TODO,
	payload: {
		id
	}
})

export const markDone = id => ({
	type: TOGGLE_DONE,
	payload: {
		id
	}
})
