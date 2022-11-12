import MenuIcon from '../MenuIcon';
import { Container } from './style';
import { device } from '../../breakpoints';

const Header = () => {
  return (
    <Container device={device}>
      <MenuIcon />
    </Container>
  );
}

export default Header;