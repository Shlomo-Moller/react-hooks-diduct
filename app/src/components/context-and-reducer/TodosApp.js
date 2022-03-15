import Provider from './Provider'
import AddTodo from './AddTodo'
import TodosList from './TodosList'

const TodosApp = () => {
	return (
		<Provider>
			<AddTodo />
			<TodosList />
		</Provider>
	)
}

export default TodosApp