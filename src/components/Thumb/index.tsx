import { Container, Word } from './style';
import { words } from './style';

const Thumb = () => {
  return (
    <Container>
      {
        words.map(({word, position, displayOrder }) => (
          <Word
            key={word}
            position={position}
            displayOrder={displayOrder}
          >
            { word }
          </Word>
        ))
      }

    </Container>
  )
}

export default Thumb;