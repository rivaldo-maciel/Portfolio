import { device } from '../../breakpoints';
import { Container, Word } from './style';
import { words } from './style';

const WordsCloud = () => {
  return (
    <Container device={device}>
      {words.map(({ word, position, displayOrder, size, dark }) => (
        <Word
          className="word"
          key={word}
          position={position}
          displayOrder={displayOrder}
          size={size}
          dark={dark}
        >
          {word}
        </Word>
      ))}
    </Container>
  );
};

export default WordsCloud;
