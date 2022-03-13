# [Component Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

>**Note**
>
>**This summary is focused on the <u>Hook</u> (function component) perspective**.

<br /><br />

## Element Rendering

When a [React component](./react-components.md) renders its [React element](./react-elements.md),
it means it injects the piece of data and/or UI it defines into to the DOM tree.

This is done by calling the function defining (returns) the element to be rendered
(the function component itself, or the `render()` method of a class component).

>**Note**
>
>A rendering isn't necessarily expressed in a visual change on the screen, however, it is a render.

<br /><br />

## Mount and Unmount

When a React element is rendered, it is "mounted".
When it is cleared from the DOM, it is "unmounted".

<br /><br />

## State Update -> Re-Render

When a component update its state, it re-renders its element with the new state values.
Again - not necessarily with actual change on the screen.
An update in the component causes React to update the DOM accordingly
([only what is necessary](./rendering-elements.md#react-only-updates-whats-necessary)).

<br /><br />

## A React Component Lifecycle

* Begins after the component is [**mounted**](#mount-and-unmount) (render onto the DOM is complete).
* Ends just before the component will [**unmount**](#mount-and-unmount) (will be removed from the DOM).
* Optionally, could have in between some [**updates**](#state-update---re-render) (re-renders).

<br /><br />

## See Also

* [Component Lifecycle from a Class Component Perspective](https://reactjs.org/docs/react-component.html#the-component-lifecycle).
* [Lifecycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).

<br /><br />

---

[Prev - React Components](./react-components.md)
|
[Next - ]()
