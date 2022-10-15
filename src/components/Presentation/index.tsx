import { useContext } from 'react';
import menuContext from '../../context/menuContext';
import WordsCloud from '../WordsCloud';
import { Container } from './style';
import { device } from '../../breakpoints';

const Presentation = () => {
  const context = useContext(menuContext);
  return (
    <Container ref={context?.refs.home} device={device}>
      <div className="name-container">
        <h3>hello! I'm</h3>
        <h1 data-text="Rivaldo">Rivaldo</h1>
        <h2>Full Stack Web Developer</h2>
        <button type="button">Download CV</button>
      </div>
      <WordsCloud />
    </Container>
  );
};

export default Presentation;
