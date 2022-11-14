import { Container } from './style';
import { IconType } from 'react-icons';

const SkillCard = ({ Icon, name }: { Icon: IconType, name: string}) => {
  return (
    <Container>
      <Icon size={50}/>
      <h2>{ name }</h2>
    </Container>
  );
}

export default SkillCard;