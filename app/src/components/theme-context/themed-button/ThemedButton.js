import React, { useContext } from 'react'
import ThemeContext from './theme-context'

const ThemedButton = props => {

  const theme = useContext(ThemeContext)

  return (
    <button
      { ...props }
      style={{ backgroundColor: theme.background }}
    />
  )
}

export default ThemedButton