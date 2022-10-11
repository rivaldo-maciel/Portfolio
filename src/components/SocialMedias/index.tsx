import { Container } from './style';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { useContext } from 'react';
import socialMediaContext from '../../context/socialMediasContext';

const SocialMedias = () => {
  const theme = useTheme();
  const context = useContext(socialMediaContext);
  return (
    <Container isVisible={context?.isVisible || false}>
      <AiFillLinkedin color={theme.colors.bg} size={40}/>
      <AiFillGithub color={theme.colors.bg} size={40}/>
      <AiFillMail color={theme.colors.bg} size={40}/>
    </Container>
  )
}

export default SocialMedias;