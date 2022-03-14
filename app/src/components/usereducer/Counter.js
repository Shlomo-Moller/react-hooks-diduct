import { useReducer } from 'react'
import reducer from './reducer'

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}

export default Counter