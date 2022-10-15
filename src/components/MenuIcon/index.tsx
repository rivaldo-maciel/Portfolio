
import { Container } from './style';
import { useContext } from 'react';
import menuContext from '../../context/menuContext';
import { device } from '../../breakpoints';


const MenuIcon = () => {
  const context = useContext(menuContext);

  return (
    <Container
      onClick={() => context?.setIsActive(prevState => !prevState)}
      className={context?.isActive ? 'active' : ''}
      id="menu-icon"
      device={device}
    >
      <div></div>
      <div></div>
      <div></div>
    </Container>
  )
}

export default MenuIcon;