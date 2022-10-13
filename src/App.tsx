import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import MenuContext from './context/MenuContext';
import SocialMediasContext from './context/SocialMediasContext';
import GlobalStyle from './globalStyles';

function App() {
  const theme = {
    colors: {
      bg: '#1D1D1D',
      letters: '#fff',
      green: '#3cff35',
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
            <MainContent />
          </MenuContext>
        </SocialMediasContext>
      </ThemeProvider>
    </>
  );
}

export default App;
