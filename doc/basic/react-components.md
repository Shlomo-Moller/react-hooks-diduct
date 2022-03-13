# [React Components](https://reactjs.org/docs/components-and-props.html)

[Functions](#function-components) or [classes](#class-components) that manage and return [React elements](./react-elements.md).

<br /><br />

## Function Components

Accept a single `props` argument and return a React element.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

<br /><br />

## Class Components

Extend
[`React.Component`](https://reactjs.org/docs/react-component.html)
and implement a `render()` method that returns a React element.

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

React uses an instance of the component's class per component
[lifecycle](./component-lifecycle.md),
calling its `render()` method when a state update is needed
(as long as we render `<Welcome />` into the same DOM node, only a single instance of the `Welcome` class will be used).

>**Note**
>
>One important difference is that class components have class instances,
>while function components don't.

<br /><br />

## Component Tag

React components can be represented by tags.

```js
const element = <Welcome name='Sara' />
```

React translates this JSX to a `Welcome` function call with a `{ name: 'Sara' }` argment as `props`,
or to an instance of the `Welcome` class initialized with that `props`.

<br /><br />

## Naming

Always start component names with a capital letter.

<br /><br />

## Composing Components

Components can refer to other components.

```js
function App() {
  return (
    <div>
      <Welcome name='Sara' />
      <Welcome name='Cahal' />
      <Welcome name='Edite' />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

<br /><br />

## Extracting Components

Consider:

```js
const Comment = props => (
  <div className='Comment'>
    <div className='UserInfo'>
      <img className='Avatar'
        src={props.author.avatarUrl}
        alt={props.author.name}
      />
      <div className='UserInfo-name'>
        {props.author.name}
      </div>
    </div>
    <div className='Comment-text'>
      {props.text}
    </div>
    <div className='Comment-date'>
      {formatDate(props.date)}
    </div>
  </div>
)
```

Now extract a `Avatar` and a `UserInfo` components:

```js
const Avatar = props => (
  <img className='Avatar'
    src={props.user.avatarUrl}
    alt={props.user.name}
  />
)

const UserInfo = props => (
  <div className='UserInfo'>
	  <Avatar user={props.user} />
		<div className='UserInfo-name'>
      {props.user.name}
    </div>
	</div>
)
```

This lets us simplify `Comment`:

```js
const Comment = props => (
  <div className='Comment'>
	  <UserInfo user={props.author} />
    <div className='Comment-text'>
      {props.text}
    </div>
    <div className='Comment-date'>
      {formatDate(props.date)}
    </div>
  </div>
)
```

<br /><br />

## More

* Props are Read-Only!

<br /><br />

---

[Prev - Rendering Elements](./rendering-elements.md)
|
[Next - Component Lifecycle](./component-lifecycle.md)
