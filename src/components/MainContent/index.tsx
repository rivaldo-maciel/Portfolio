import { useContext } from 'react';
import menuContext from '../../context/menuContext';
import AboutMe from '../AboutMe';
import Menu from '../Menu';
import Presentation from '../Presentation';
import Skills from '../Skills';
import SocialMedias from '../SocialMedias';
import Thumb from '../Thumb';
import { Container } from './style';

const MainContent = () => {
  const context = useContext(menuContext);
  return (
    <Container
      onScroll={() => {
        context?.setIsActive(true);
        setTimeout(() => {
          context?.setIsActive(false);
        }, 3000);
      }}
    >
      {context?.isActive ? (
        <Menu />
      ) : (
        <>
          <Presentation />
          <Thumb />
          <AboutMe />
          <Skills />
        </>
      )}
      <SocialMedias />
    </Container>
  );
};

export default MainContent;
