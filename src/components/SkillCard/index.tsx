import { Container } from './style';
import { IconType } from 'react-icons';
import { device } from '../../breakpoints';

const SkillCard = ({ Icon, name }: { Icon: IconType, name: string}) => {
  return (
    <Container device={device}>
      <Icon size={50}/>
      <h2>{ name }</h2>
    </Container>
  );
}

export default SkillCard;