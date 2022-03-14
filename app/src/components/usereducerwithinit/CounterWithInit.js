import { useReducer } from 'react'
import reducerWithInit from './reducer-with-init'

function CounterWithInit({ initialCount }) {
  const [state, dispatch] = useReducer(reducerWithInit, { count: initialCount })
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
        Reset
      </button>
    </>
  )
}

export default CounterWithInit