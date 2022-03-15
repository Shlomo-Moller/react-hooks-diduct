import { useState, useContext } from 'react'
import TodosContext from './context'

const AddTodo = () => {

	const [label, setLabel] = useState('')
	const { addTodo } = useContext(TodosContext)

	return (
		<>
			<input type='text'
             value={label}
						 onChange={e => setLabel(e.target.value)}
						 placeholder='Type your todo...'
			/>
			<button onClick={() => {
				addTodo(label)
				setLabel('')
			}}>
				Add
			</button>
		</>
	)
}

export default AddTodo