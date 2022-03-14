# [Consuming Multiple Contexts](https://reactjs.org/docs/context.html#consuming-multiple-contexts)

```js
const ThemeContext = createContext('light')
const UserContext = createContext({ name: 'Guest' })

const Content = () => (
  <ThemeContext.Consumer>
    {theme => (
      <UserContext.Consumer>
        {user => (
          <ProfilePage user={user} theme={theme} />
        )}
      </UserContext.Consumer>
    )}
  </ThemeContext.Consumer>
)

const Layout = () => (
  <div>
    <Sidebar />
    <Content />
  </div>
)

const AppPage = ({ signedInUser, theme }) => (
  <ThemeContext.Provider value={theme}>
    <UserContext.Provider value={signedInUser}>
      <Layout />
    </UserContext.Provider>
  </ThemeContext.Provider>
)
```

<br /><br />

---

[Prev - Updating Context from a Nested Component](./update-from-nested.md)
|
[Next - ]()
