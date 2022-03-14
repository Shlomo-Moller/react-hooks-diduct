import React from 'react'
import ThemeContext from './theme-context'

const ThemedButton = props => (
  <ThemeContext.Consumer>
    {theme => (
      <button
        { ...props }
        style={{ backgroundColor: theme.background }}
      />
    )}
  </ThemeContext.Consumer>
)

export default ThemedButton