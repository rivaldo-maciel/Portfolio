import { device } from '../../breakpoints';
import { Container } from './style';

type props = {
  src: string,
  title: string,
  link: string
}

const CertificationCard = ({ src }: props) => {
  return (
    <Container device={device}>
      <img src={src} alt="certification image" />
    </Container>
  )
}

export default CertificationCard;