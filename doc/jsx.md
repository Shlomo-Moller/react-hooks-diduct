# [JSX](https://reactjs.org/docs/introducing-jsx.html)

A syntax extension to JS.

<br /><br />

## Example

```js
const element = (
  <h1 className='greeting'>
    Hello, world!
  </h1>
)
```

<br /><br />

## JSX -> React Element

Babel compiles JSX to `React.createElement()` calls that evaluate to
[React elements](./react-elements.md).

The
[last example](#example)
compiles (and is identical) to:

```js
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
)
```

`React.createElement()` essentially creates an object as in the
[React element example](./react-elements.md#example).

<br /><br />

## More

JSX... :

* Helps separate *concerns* (rather than technologies) with
  [React components](./components-and-props.md#react-components)
  that contain both markup and logic.
* Allows React to show more useful error and warning messages.
* Prevents injection attacks - It is safe to embed user input in JSX.

  ```js
  const title = response.potentiallyMaliciousInput
  // This is safe:
  const element = <h1>{title}</h1>
  ```

<br /><br />

## Usage Tips

* You can put any valid JS expression inside the `{}` in JSX.
  JSX is an expression too.

  ```js
  const name = 'Josh Perez'
  const element = <p>Hello, {name}</p>
  ```

* Wrapp multi-line JSX in `()` to avoid auto `;` insertion.

  ```js
  return (
    <p>
      Hello, {formatName(user)}!
    </p>
  )
  ```

* You may also use `{}` to embed a JS expression in an attribute.

  ```js
  const element = <img src={user.avatarUrl}></img>
  ```

* React DOM uses `camelCase` property naming convention.
  E.g.,
  <del>`class`</del> -> <ins>`className`</ins>.
  <del>`tabindex`</del> -> <ins>`tabIndex`</ins>.

* JSX allows self-closing for any tag (`<img />`,
[`<MyComponent />`](./components-and-props.md)).

<br /><br />

---

[Prev - React Elements](./react-elements.md)
|
[Next - Rendering Elements](./rendering-elements.md)
