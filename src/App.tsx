import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import MenuContext from './context/MenuContext'
import GlobalStyle from './globalStyles'

function App() {
  return (
    <>
      <MenuContext>
        <GlobalStyle />
        <Menu />
        <Header/>
      </MenuContext>
    </>
  )
}

export default App
