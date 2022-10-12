import { ThemeProvider } from 'styled-components';
import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Menu from './components/Menu';
import Presentation from './components/Presentation';
import Skills from './components/Skills';
import SocialMedias from './components/SocialMedias';
import Thumb from './components/Thumb';
import MenuContext from './context/MenuContext';
import SocialMediasContext from './context/SocialMediasContext';
import GlobalStyle from './globalStyles';

function App() {
  const theme = {
    colors: {
      bg: '#1D1D1D',
      letters: '#fff',
      green: '#01fe87',
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
            <MainContent>
              <Menu />
              <Presentation />
              <Thumb />
              <AboutMe />
              <Skills />
              <SocialMedias />
            </MainContent>
          </MenuContext>
        </SocialMediasContext>
      </ThemeProvider>
    </>
  );
}

export default App;
