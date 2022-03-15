import { useContext } from 'react'
import TodosContext from './context'
import './TodosList.css'

const TodosList = () => {

	const { todos, removeTodo, markDone } = useContext(TodosContext)

	return (
		<ul>
			{todos.map(todo => (
				<li key={todo.id}
				    className={'todo' + (todo.done ? ' done' : '')}
						onClick={() => markDone(todo.id)}
				>
					{todo.label}
					<button onClick={() => removeTodo(todo.id)}>
						X
					</button>
				</li>
			))}
		</ul>
	)
}

export default TodosList