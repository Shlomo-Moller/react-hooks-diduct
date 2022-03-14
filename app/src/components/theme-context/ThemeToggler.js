import { useState, useCallback } from 'react'
import Page from './Page'
import Section from './Section'
import Toolbar from './Toolbar'
import ThemedButton from './themed-button/ThemedButton'
import themes from '../../helpers/themes'
import ThemeContext from './themed-button/theme-context'

const ThemeToggler = () => {

	const [theme, setTheme] = useState(themes.light)
  
	const toggleTheme = useCallback(
		() => setTheme(prev => prev === themes.light ? themes.dark : themes.light),
		[setTheme, themes] // Avoid unintentional renders
	)

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

export default ThemeToggler