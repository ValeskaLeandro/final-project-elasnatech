// Theme
import { ThemeProvider } from "styled-components"
import dark from "./styles/themes/dark";

// Styles
import GlobalStyle from "./styles/global"

// Hooks
import usePersistedState from "./hooks/usePersistedState";

// Components


function App() {
  const [theme, setTheme, checked, setChecked] = usePersistedState("theme", dark, false);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      Olá!
    </ThemeProvider>
  )
}

export default App
