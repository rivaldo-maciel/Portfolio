import { useContext, useEffect } from 'react';
import menuContext from '../../context/menuContext';
import socialMediasContext from '../../context/socialMediasContext';
import AboutMe from '../AboutMe';
import Certifications from '../Certifications';
import Menu from '../Menu';
import Presentation from '../Presentation';
import Projects from '../Projects';
import Skills from '../Skills';
import SocialMedias from '../SocialMedias';
import { Container } from './style';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';

const MainContent = () => {
  const context = useContext(socialMediasContext);
  const menuCtx = useContext(menuContext);

  useEffect(() => {
    Aos.init();
  }, []);

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
      <AboutMe />
      <Skills/>
      <Projects />
      <Certifications />
      <SocialMedias />
    </Container>
  );
};

export default MainContent;
