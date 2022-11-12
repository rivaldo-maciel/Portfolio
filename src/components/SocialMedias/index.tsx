import { Container } from './style';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import { device } from '../../breakpoints';

const SocialMedias = () => {
  return (
    <Container device={device}>
      <a
        href="https://www.linkedin.com/in/rivaldo-dev-fullstack/"
        target="blank"
      >
        <AiFillLinkedin color={"#111111"} size={40} />
      </a>
      <a href="https://github.com/rivaldo-maciel" target="blank">
        <AiFillGithub color={"#111111"} size={40} />
      </a>
      <a href="mailto:rivaldomaciel@hotmail.com">
        <AiFillMail color={"#111111"} size={40} />
      </a>
    </Container>
  );
};

export default SocialMedias;
