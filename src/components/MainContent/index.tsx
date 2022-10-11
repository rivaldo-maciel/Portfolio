import { ReactNode, useContext } from 'react';
import socialMediaContext from '../../context/socialMediasContext';
import { Container } from './style';

const MainContent = ({ children }: { children: ReactNode}) => {
  const context = useContext(socialMediaContext);
  return (
    <Container onScroll={() => {
      context?.setIsVisible(true)
      setTimeout(() => {
        context?.setIsVisible(false);
      }, 3000)}
    }>
      {
        children
      }
    </Container>
  )
}

export default MainContent;