import { useReducer } from 'react'
import initialState from './initial-state'
import reducer from './reducer'
import TodosContext from './context'
import { addTodo, removeTodo, markDone } from './actions'

const Provider = ({ children }) => {
  
	const [state, dispatch] = useReducer(reducer, initialState)
  
	const value = {
		todos: state.todos,
		addTodo: label => dispatch(addTodo(label)),
		removeTodo: id => dispatch(removeTodo(id)),
		markDone: id => dispatch(markDone(id)),
	}
  
	return (
		<TodosContext.Provider value={value}>
			{children}
		</TodosContext.Provider>
	)
}

export default Provider