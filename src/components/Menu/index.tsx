import { Container } from './style';
import { useContext } from 'react';
import menuContext from '../../context/menuContext';

const Menu = () => {
  const context = useContext(menuContext);
  return (
    <Container isActive={context?.isActive}>
      <ul>
        {
          ["Sobre Mim", "Projetos", "Certificações", "Contatos"]
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