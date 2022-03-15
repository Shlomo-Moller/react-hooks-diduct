# `useContext` & `useReducer`

## Example

```js
const initialState = {
  todos: []
}
```

```js
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_DONE = 'TOGGLE_DONE'
```

```js
const addTodo = label => ({
  type: ADD_TODO,
  payload: { label }
})

const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: { id }
})

const markDone = id => ({
  type: TOGGLE_DONE,
  payload: { id }
})
```

```js
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
```

```js
const TodosContext = createContext()
```

```js
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
```

```js
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
```

```js
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
```

```js
const TodosApp = () => {
  return (
    <Provider>
      <AddTodo />
      <TodosList />
    </Provider>
  )
}
```
