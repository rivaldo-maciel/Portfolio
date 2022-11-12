import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { device } from '../../breakpoints';
import MenuLinks from '../MenuLinks';
import { Container } from './style';

const SideBar = () => {
  const theme = useTheme();
  return (
    <Container device={device}>
      <div className="menu-links-container">
        <MenuLinks />
          <div className="social-media-links">
            <a
              href="https://www.linkedin.com/in/rivaldo-dev-fullstack/"
              target="blank"
            >
              <AiFillLinkedin color={theme.colors.yellow} size={20} />
            </a>
            <a href="https://github.com/rivaldo-maciel" target="blank">
              <AiFillGithub color={theme.colors.yellow} size={20} />
            </a>
            <a href="mailto:rivaldomaciel@hotmail.com">
              <AiFillMail color={theme.colors.yellow} size={20} />
            </a>
          </div>
        </div>
    </Container>
  );
};

export default SideBar;
