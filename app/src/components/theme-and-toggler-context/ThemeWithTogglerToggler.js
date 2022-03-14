import { useState } from 'react'
import themes from '../../helpers/themes'
import ThemeAndTogglerContext from './theme-toggler-button/theme-and-toggler-context'
import Content from './Content'

const ThemeWithTogglerToggler = () => {
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
	  <ThemeAndTogglerContext.Provider value={value}>
	    <Content />
	  </ThemeAndTogglerContext.Provider>
	)
}

export default ThemeWithTogglerToggler