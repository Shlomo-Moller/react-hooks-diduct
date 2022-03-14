# Links

* [Context](https://reactjs.org/docs/context.html)
* [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext)

# Let's Go

Create a context object with a default value definition:

```js
const ThemeContext = React.createContext('light') // "light" is the default
```

>**Note**
>
>The default value argument is only used when a component does not have a matching Provider above it in the tree.

Provide it at some point in the elements tree, with the actual current value:

```js
class App extends React.Component {
  render = () => ( // Current theme is "dark"
    <ThemeContext.Provider value='dark'>
      <Toolbar />
    </ThemeContext.Provider>
  )
}
```

Some guy in the middle:

```js
const Toolbar = () => (
  <div>
    <ThemedButton />
  </div>
)
```

The `ThemedButton` component can subscribe to the context like this:

```js
class ThemedButton extends React.Component {
  render = () => <Button theme={this.context} />
}
ThemedButton.contextType = ThemeContext
```

Or, if you are using the experimental
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
>[Consuming Multiple Contexts](https://reactjs.org/docs/context.html#consuming-multiple-contexts).

## [`Context.Consumer`](https://reactjs.org/docs/context.html#contextconsumer)

Lets you subscribe to a context within a **function component**:

```js
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

Requires a
[function as a child](https://reactjs.org/docs/render-props.html#using-props-other-than-render).

## [Context.displayName](https://reactjs.org/docs/context.html#contextdisplayname)

```js
MyContext.displayName = 'MyDisplayName'
<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools
```

## [Examples](https://reactjs.org/docs/context.html#examples)

`theme-context.js`:

```js
export const themes = {
  light: {
    foreground: '#000',
    background: '#eee'
  },
  dark: {
    foreground: '#fff',
    background: '#222'
  }
}

export const ThemeContext = createContext(themes.dark)
```

`ThemedButton.js`:

```js
class ThemedButton extends React.Component {
  render() {
    let props = this.props
    let theme = this.context
    return (
      <button
        { ...props }
        style={{ backgroundColor: theme.background }}
      />
    )
  }
}
ThemedButton.contextType = ThemeContext
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
  
  const toggleTheme = () => setTheme(prev => prev === themes.light ? themes.dark : themes.light)
  
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
