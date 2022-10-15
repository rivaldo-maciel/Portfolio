import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';
import MenuContext from './context/MenuContext';
import SocialMediasContext from './context/SocialMediasContext';
import GlobalStyle from './globalStyles';

function App() {
  const theme = {
    colors: {
      bg: '#1D1D1D',
      letters: '#fff',
      yellow: '#f1af09',
      gray: '#8e8e8e',
      gray2: '#2b2b2b'
    }
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <SocialMediasContext>
          <MenuContext>
            <GlobalStyle />
            <Header />
            <SideBar />
            <MainContent />
          </MenuContext>
        </SocialMediasContext>
      </ThemeProvider>
    </>
  );
}

export default App;
