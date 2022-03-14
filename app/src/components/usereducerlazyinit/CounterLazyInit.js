import { useReducer } from 'react'
import reducerLazyInit from './reducer-lazy-init'
import init from './init'

function CounterLazyInit({ initialCount }) {
  const [state, dispatch] = useReducer(reducerLazyInit, initialCount, init)
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

export default CounterLazyInit