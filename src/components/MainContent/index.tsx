import { useContext } from 'react';
import menuContext from '../../context/menuContext';
import socialMediasContext from '../../context/socialMediasContext';
import AboutMe from '../AboutMe';
import Menu from '../Menu';
import Presentation from '../Presentation';
import Projects from '../Projects';
import Skills from '../Skills';
import SocialMedias from '../SocialMedias';
import Thumb from '../Thumb';
import { Container } from './style';

const MainContent = () => {
  const context = useContext(socialMediasContext);
  const contextMenu = useContext(menuContext);
  return (
    <Container
      onScroll={() => {
        context?.setIsVisible(true);
        setTimeout(() => {
          context?.setIsVisible(false);
        }, 3000);
      }}
    >
      {contextMenu?.isActive? (
        <Menu />
      ) : (
        <>
          <Presentation />
          <Thumb />
          <AboutMe />
          <Skills />
          <Projects />
          <SocialMedias />
        </>
      )}
    </Container>
  );
};

export default MainContent;
