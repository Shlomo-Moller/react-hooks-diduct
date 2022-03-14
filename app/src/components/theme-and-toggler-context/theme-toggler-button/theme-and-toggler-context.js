import { createContext } from 'react'
import themes from '../../../helpers/themes'

const ThemeAndTogglerContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {}
})

export default ThemeAndTogglerContext