import { Container } from './style';
import { useContext } from 'react';
import menuContext from '../../context/menuContext';

const Menu = () => {
  const context = useContext(menuContext);
  return (
    <Container isActive={context?.isActive}>
      <ul>
        {
          ["About Me", "My Skills", "Projects", "certifications", "contact"]
          .map((link) => (
            <li key={link}>
              <a href="">
                { link }
              </a>
            </li>
          ))
        }
      </ul>
    </Container>
  )
}

export default Menu;