import { createContext } from 'react'

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