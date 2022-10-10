
import { Container } from './style';
import { useState } from 'react';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container
      onClick={() => setIsActive(prevState => !prevState)}
      className={isActive && 'active'}
    >
      <div></div>
      <div></div>
      <div></div>
    </Container>
  )
}

export default Menu;