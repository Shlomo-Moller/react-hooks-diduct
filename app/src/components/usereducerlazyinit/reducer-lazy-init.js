import init from './init'

function reducerLazyInit(state, action) {

  const { type, payload } = action

  switch (type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(payload)
    default:
      throw new Error() // Why not `return state` ???
  }
}

export default reducerLazyInit