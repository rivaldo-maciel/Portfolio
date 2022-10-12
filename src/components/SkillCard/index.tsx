import { Container } from './style';
import { IconType } from 'react-icons';
import { useState } from 'react';

const SkillCard = ({ Icon, name }: { Icon: IconType, name: string}) => {
  const [iconIsVisible, setIconIsVisible] = useState(true);

  return (
    <Container onClick={() => setIconIsVisible(prevState => !prevState)}>
      <Icon size={50} className={iconIsVisible ? '' : 'hidden'}/>
      <h2 className={iconIsVisible ? 'hidden' : ''}>{ name }</h2>
    </Container>
  );
}

export default SkillCard;