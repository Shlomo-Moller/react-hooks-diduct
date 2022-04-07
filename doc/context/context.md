# Context

Links

* [Context](https://reactjs.org/docs/context.html)
* [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext)

<br /><br />

## Provide a Context

Create a context object with a default value definition:

```js
const ThemeContext = createContext('light') // "light" is the default
```

>**Note**
>
>The default value argument is only used when a component does not have a matching Provider above it in the tree.

Provide it at some point in the elements tree, with the actual current value:

```js
const App = () => (
  // Current theme is "dark"
  <ThemeContext.Provider value='dark'>
    <Toolbar />
  </ThemeContext.Provider>
)
```

>**Note**
>
>To avoid unnecessary re-renders,
>allways assign the `value` prop a value that keeps its state between re-renders:
>
>```js
>const [value, setValue] = useState({ x: 0, y: 0 })
>...
>return <MyContext.Provider value={value}>...
>```

Some guy in the middle:

```js
const Toolbar = () => (
  <div>
    <ThemedButton />
  </div>
)
```

<br /><br />

## Subscribe to a Context

Subscribe `ThemedButton` to the context in one of the following ways:

### Hooks Way

* `useContext`
  
  ```js
  const ThemedButton = () => {
    const theme = useContext(ThemeContext)
    return <Button theme={theme} />
  }
  ```

* [`Context.Consumer`](https://reactjs.org/docs/context.html#contextconsumer)
  
  Lets you subscribe to a context within a **function component**:

  ```js
  const ThemedButton = () => (
    <ThemeContext.Consumer>
      {value => <Button theme={value} />}
    </ThemeContext.Consumer>
  )
  ```

  Requires a
  [function as a child](https://reactjs.org/docs/render-props.html#using-props-other-than-render).

### Class Way

* Basic
  ```js
  class ThemedButton extends React.Component {
    render = () => <Button theme={this.context} />
  }
  ThemedButton.contextType = ThemeContext
  ```
* Using static class field - If you are using the experimental
  [public class fields syntax](https://babeljs.io/docs/plugins/transform-class-properties/):
  ```js
  class ThemedButton extends React.Component {
    static contextType = ThemeContext
    render // Same...
  }
  ```

You can reference `this.context` in any of the lifecycle methods including the `render` function.

>**Note**
>
>You can only subscribe to a **single** context using this API.
>If you need to read more than one see
>[Consuming Multiple Contexts](./consuming-multiple-contexts.md).

<br /><br />

## [Context.displayName](https://reactjs.org/docs/context.html#contextdisplayname)

```js
MyContext.displayName = 'MyDisplayName'
<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools
```

<br /><br />

## [Example](https://reactjs.org/docs/context.html#examples)

```js
const themes = {
  light: {
    foreground: '#000',
    background: '#eee'
  },
  dark: {
    foreground: '#fff',
    background: '#222'
  }
}
```

```js
const ThemeContext = createContext(themes.dark)
```

```js
const ThemedButton = props => {
  const theme = useContext(ThemeContext)
  return (
    <button
      { ...props }
      style={{ backgroundColor: theme.background }}
    />
  )
}
```

`Toolbar.js`:

```js
const Toolbar = ({ changeTheme }) => (
  <ThemedButton onClick={changeTheme}>
    Change Theme
  </ThemedButton>
)
```

`ThemeToggler.js`:

```js
const ThemeToggler = () => {
  
  const [theme, setTheme] = useState(themes.light)
  
	const toggleTheme = useCallback(
		() => setTheme(prev => prev === themes.light ? themes.dark : themes.light),
		[setTheme, themes] // Avoid unintentional renders
	)
  
  return (
    <Page>
      <ThemeContext.Provider value={theme}>
        <Toolbar changeTheme={toggleTheme} />
      </ThemeContext.Provider>
      <Section>
        <ThemedButton>Blabla</ThemedButton>
      </Section>
    </Page>
  )
}
```

<br /><br />

---

[Prev - ]()
|
[Next - Updating Context from a Nested Component](./update-from-nested.md)
