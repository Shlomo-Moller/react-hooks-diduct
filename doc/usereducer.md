# [`useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer)

```js
const [state, dispatch] = useReducer(reducer, initialArg, init)
```

Like [Redux](https://redux.js.org/).
See also [examples](https://github.com/reduxjs/redux/tree/master/examples).

Usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

Also lets you optimize performance for components that trigger deep updates because you can pass `dispatch` down
[instead of callbacks](https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down).

## Example

```js
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error() // Why not `return state` ???
  }
}

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
```

>**Note**
>
>React doesn’t use the `state = initialState` argument convention popularized by Redux.
>The initial value sometimes needs to depend on `props` and so is specified from the Hook call instead.
>`useReducer(reducer, undefined, reducer)` emulates the Redux behavior, but it’s not encouraged.

## Specifying the initial state


```js
function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    // Same 'increment' & 'decrement' cases... and in addition:
    case 'reset':
      return { count: payload }
    // Same default...
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, { count: initialCount })
  return (
    <>
      {/* Same decrement & increment buttons... and in addition: */}
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
        Reset
      </button>
    </>
  )
}
```

## Lazy initialization

```js
const init = initialCount => ({ count: initialCount })

function reducer(state, action) {
   // ...
  switch (type) {
    // ...
    case 'reset':
      return init(payload)
    // ...
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init)
  // Same return...
}
```

<br /><br />

---

[Prev - Consuming Multiple Contexts](./context/consuming-multiple-contexts.md)
|
[Next - Context & `useReducer`](./usecontext-usereducer.md)
