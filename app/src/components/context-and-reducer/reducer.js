import { ADD_TODO, REMOVE_TODO, TOGGLE_DONE } from './types'

export default function(state, action) {
	const { type, payload } = action

	switch(type) {

		case ADD_TODO:
			return {
				todos: state.todos.concat([{
					id: Date.now(),
					label: payload.label,
					done: false
				}])
			}
		
		case REMOVE_TODO:
			return {
				todos: state.todos.filter(
					todo => todo.id !== payload.id
				)
			}
		
		case TOGGLE_DONE:
			return {
				todos: state.todos.map(
					todo => todo.id === payload.id
					  ? {
							...todo,
							done: !todo.done
						}
						: todo
				)
			}
		
		default:
			return state
		
	}
}