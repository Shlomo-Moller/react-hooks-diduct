function reducerWithInit(state, action) {

  const { type, payload } = action

  switch (type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: payload }
    default:
      throw new Error() // Why not `return state` ???
  }
}

export default reducerWithInit