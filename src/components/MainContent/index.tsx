import { useContext } from 'react';
import menuContext from '../../context/menuContext';
import socialMediasContext from '../../context/socialMediasContext';
import AboutMe from '../AboutMe';
import Certifications from '../Certifications';
import Menu from '../Menu';
import Presentation from '../Presentation';
import Projects from '../Projects';
import Skills from '../Skills';
import SocialMedias from '../SocialMedias';
import WordsCloud from '../WordsCloud';
import { Container } from './style';

const MainContent = () => {
  const context = useContext(socialMediasContext);
  const menuCtx = useContext(menuContext);

  return (
    <Container
      onScroll={() => {
        context?.setIsVisible(true);
        setTimeout(() => {
          context?.setIsVisible(false);
        }, 3000);
      }}
    >
      {
        menuCtx?.isActive && <Menu />
      }
      <Presentation />
      <WordsCloud />
      <AboutMe />
      <Skills />
      <Projects />
      <Certifications />
      <SocialMedias />
    </Container>
  );
};

export default MainContent;
