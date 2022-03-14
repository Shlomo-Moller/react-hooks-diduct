import ThemedButton from './themed-button/ThemedButton'

const Toolbar = ({ changeTheme }) => (
	<ThemedButton onClick={changeTheme}>
    Change Theme
  </ThemedButton>
)

export default Toolbar