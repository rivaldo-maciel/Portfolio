import { Container } from './style';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { useContext } from 'react';
import socialMediasContext from '../../context/socialMediasContext';

const SocialMedias = () => {
  const theme = useTheme();
  const context = useContext(socialMediasContext);
  return (
    <Container>
      <a
        href="https://www.linkedin.com/in/rivaldo-dev-fullstack/"
        target="blank"
      >
        <AiFillLinkedin color={theme.colors.bg} size={40} />
      </a>
      <a href="https://github.com/rivaldo-maciel" target="blank">
        <AiFillGithub color={theme.colors.bg} size={40} />
      </a>
      <a href="mailto:rivaldomaciel@hotmail.com">
        <AiFillMail color={theme.colors.bg} size={40} />
      </a>
    </Container>
  );
};

export default SocialMedias;
