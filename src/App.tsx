import { ThemeProvider } from 'styled-components'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Presentation from './components/Presentation'
import Thumb from './components/Thumb'
import MenuContext from './context/MenuContext'
import GlobalStyle from './globalStyles'

function App() {
  const theme = {
    colors: {
      bg: '#1D1D1D',
      letters: '#fff',
      green: '#01fe87'
    }
  }

  return (
    <>
        <ThemeProvider theme={theme}>
          <MenuContext>
            <GlobalStyle />
              <Header/>
              <main>
                <Menu />
                <Presentation />
                <Thumb />
              </main>
          </MenuContext>
        </ThemeProvider>
    </>
  )
}

export default App
