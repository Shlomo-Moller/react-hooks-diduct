# [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)

Unlike browser DOM elements,
[React elements](./react-elements.md)
are plain objects.

React DOM takes care of updating the DOM to match the React elements.

To render a React element into a DOM node, pass both to `ReactDOM.render()`:
```js
const element = <h1>Hello, world</h1>
ReactDOM.render(element, document.getElementById('root'))
```

React elements are immutable.

However,
[React components](./react-components.md)
can be stateful; they can manage the returned element by a state that could be updated and cause a re-render of the element.

## [React Only Updates What’s Necessary](https://reactjs.org/docs/rendering-elements.html#react-only-updates-whats-necessary)

When calling `ReactDOM.render()` again, or when updating a stateful component's state, React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

This is done using the [VDOM](https://reactjs.org/docs/faq-internals.html).

<br /><br />

---

[Prev - JSX](./jsx.md)
|
[Next - React Components](./react-components.md)
