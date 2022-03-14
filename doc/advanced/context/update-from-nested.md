# [Updating Context from a Nested Component](https://reactjs.org/docs/context.html#updating-context-from-a-nested-component)

You can pass a function down through the context to allow consumers to update the context:

`theme-context.js`:

```js
...
export const ThemeContext = createContext(
  theme: themes.dark,
  toggleTheme: () => {}
)
```

`ThemedButton.js`:

```js
const ThemedButton = () => (
  <ThemeContext.Consumer>
    {({theme, toggleTheme}) => (
      <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
        Toggle Theme
      </button>
    )}
  </ThemeContext.Consumer>
)
```

`Content.js`:

```js
const Content = () => (
  <div>
    <ThemeTogglerButton />
  </div>
)
```

`ThemeToggler.js`:

```js
const ThemeToggler = () => {
  // To avoid unintentional re-renders,
  // we keep both context sections (`theme` and `toggleTheme`) in one state variable,
  // so we need to define the toggleTheme function before state initialization:
  
  const toggleTheme = () => setValue(prev => ({
    ...prev,
    theme: prev.theme === themes.light ? themes.dark : themes.light
  }))
  
  const [value, setValue] = useState({
    theme: themes.light,
    toggleTheme
  })
  
  return (
    <Page>
      <ThemeContext.Provider value={themeValue}>
        <Content />
      </ThemeContext.Provider>
    </Page>
  )
}
```

<br /><br />

---

[Prev - Context](./context.md)
|
[Next - Consuming Multiple Contexts](./consuming-multiple-contexts.md)
