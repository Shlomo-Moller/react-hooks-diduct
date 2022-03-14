import ThemeTogglerContext from './theme-and-toggler-context'

const ThemeTogglerButton = () => (
  <ThemeTogglerContext.Consumer>
    {({theme, toggleTheme}) => (
      <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
        Toggle Theme
      </button>
    )}
  </ThemeTogglerContext.Consumer>
)

export default ThemeTogglerButton