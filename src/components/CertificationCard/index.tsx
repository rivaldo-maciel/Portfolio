import { device } from '../../breakpoints';
import { Container } from './style';

type props = {
  src: string;
  link: string;
};

const CertificationCard = ({ src, link }: props) => {
  return (
    <Container device={device}>
      <a href={link} target="blank">
        <img src={src} alt="certification image" />
      </a>
    </Container>
  );
};

export default CertificationCard;
