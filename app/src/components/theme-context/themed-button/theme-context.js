import { createContext } from 'react'
import themes from './../../../helpers/themes'

const ThemeContext = createContext(themes.dark)

export default ThemeContext