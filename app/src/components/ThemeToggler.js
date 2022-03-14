import { useState } from 'react'
import { themes } from './themed-button/theme-context'
import Page from './Page'
import { ThemeContext } from './themed-button/theme-context'
import Toolbar from './Toolbar'
import Section from './Section'
import ThemedButton from './themed-button/ThemedButton'

const ThemeToggler = () => {

	const [theme, setTheme] = useState(themes.light)

	const toggleTheme = () => setTheme(prev => prev === themes.light ? themes.dark : themes.light)

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